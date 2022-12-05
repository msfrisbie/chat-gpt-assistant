import { createParser } from "eventsource-parser";
import ExpiryMap from "expiry-map";
import { v4 as uuidv4 } from "uuid";
import { CHAT_GPT_HISTORY_KEY } from "../consts";

export async function fetchSSE(resource, options) {
  const { onMessage, ...fetchOptions } = options;
  const resp = await fetch(resource, fetchOptions);
  const parser = createParser((event) => {
    if (event.type === "event") {
      onMessage(event.data);
    }
  });
  for await (const chunk of streamAsyncIterable(resp.body)) {
    const str = new TextDecoder().decode(chunk);
    parser.feed(str);
  }
}

export async function* streamAsyncIterable(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

const KEY_ACCESS_TOKEN = "accessToken";

const cache = new ExpiryMap(10 * 1000);

async function getAccessToken() {
  if (cache.get(KEY_ACCESS_TOKEN)) {
    return cache.get(KEY_ACCESS_TOKEN);
  }
  const resp = await fetch("https://chat.openai.com/api/auth/session")
    .then((r) => r.json())
    .catch(() => ({}));
  if (!resp.accessToken) {
    throw new Error("UNAUTHORIZED");
  }
  cache.set(KEY_ACCESS_TOKEN, resp.accessToken);
  return resp.accessToken;
}

async function getAnswer(question, callback) {
  const accessToken = await getAccessToken();
  await fetchSSE("https://chat.openai.com/backend-api/conversation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      action: "next",
      messages: [
        {
          id: uuidv4(),
          role: "user",
          content: {
            content_type: "text",
            parts: [question],
          },
        },
      ],
      model: "text-davinci-002-render",
      parent_message_id: uuidv4(),
    }),
    onMessage(message) {
      console.debug("sse message", message);
      if (message === "[DONE]") {
        return;
      }
      const data = JSON.parse(message);
      const text = data.message?.content?.parts?.[0];
      if (text) {
        callback(text);
      }
    },
  });
}

chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener(async (msg) => {
    console.debug("received msg", msg);
    try {
      await getAnswer(msg.question, (answer) => {
        port.postMessage({ answer });
      });
    } catch (err) {
      console.error(err);
      port.postMessage({ error: err.message });
      cache.delete(KEY_ACCESS_TOKEN);
    }
  });
});

chrome.runtime.onInstalled.addListener((reason) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.runtime.openOptionsPage();
  }
});

chrome.omnibox.onInputEntered.addListener((text: string) => {
  // @ts-ignore
  const url = chrome.runtime.getManifest().options_ui.page;

  chrome.tabs.create({
    url: chrome.runtime.getURL(`${url}?q=${text}`),
  });
});

chrome.omnibox.onInputChanged.addListener(async (text, suggest) => {
  const normalizedText = text.trim().toLowerCase();

  const history = await chrome.storage.local.get(CHAT_GPT_HISTORY_KEY);

  console.log({ history });

  if (history[CHAT_GPT_HISTORY_KEY]) {
    suggest(
      history[CHAT_GPT_HISTORY_KEY].filter((historyItem: string) =>
        historyItem.trim().toLowerCase().includes(normalizedText)
      ).map((historyItem: string) => {
        let title = historyItem;

        const titleStartIdx = title.toLowerCase().indexOf(normalizedText);
        if (titleStartIdx >= 0) {
          const titleEndIdx = titleStartIdx + normalizedText.length;
          title =
            title.slice(0, titleStartIdx) +
            "<match>" +
            title.slice(titleStartIdx, titleEndIdx) +
            "</match>" +
            title.slice(titleEndIdx);
        }

        return {
          content: historyItem,
          description: `${title}`,
        };
      })
    );
  }
});

chrome.contextMenus.create({
  id: "gpt-search",
  title: "Use selected text as ChatGPT prompt",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "gpt-search") {
    info.selectionText;

    // @ts-ignore
    const url = chrome.runtime.getManifest().options_ui.page;

    chrome.tabs.create({
      url: chrome.runtime.getURL(`${url}?q=${info.selectionText}`),
    });
  }
});
