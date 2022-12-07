import { CHAT_GPT_HISTORY_KEY, KEY_ACCESS_TOKEN, MessageType } from "../consts";
import { IWrappedMessage } from "../interfaces/settings";
import { cache, getAnswer } from "../utils/chatgpt";
import { wrapMessage } from "../utils/messaging";

console.log("initialized background script");

/**
 * For unknown reasons, these handlers cannot be moved into
 * helper functions in different files. Likely to do with
 * Parcel compilation
 */

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    // @ts-ignore
    const url = chrome.runtime.getManifest().options_ui.page;

    chrome.tabs.create({
      url: chrome.runtime.getURL(`${url}#/how-to-use`),
    });
  }
});

chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener(async (wrappedMessage: IWrappedMessage) => {
    const msg = wrappedMessage.message;

    console.log(wrappedMessage);

    switch (wrappedMessage.messageType) {
      case MessageType.SEND_PROMPT:
        try {
          await getAnswer(msg.question, (answer) => {
            console.log("sending answer");
            console.log({ answer, port });

            port.postMessage(
              wrapMessage(
                wrappedMessage.channelId,
                MessageType.SEND_PROMPT_RESPONSE,
                { answer }
              )
            );
            console.log("sent answer");
          });
        } catch (err) {
          console.error(err);

          port.postMessage(
            wrapMessage(
              wrappedMessage.channelId,
              MessageType.SEND_PROMPT_RESPONSE,
              { error: err.message }
            )
          );
          cache.delete(KEY_ACCESS_TOKEN);
        }
        break;
      default:
        throw new Error("Unknown message type");
    }
  });
});

console.log("initialized messaging");

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

console.log("initialized omnibox");

try {
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
} catch (e) {}

try {
  chrome.contextMenus.create({
    id: "gpt-settings",
    title: "ChatGPT Assistant settings",
    contexts: ["audio", "frame", "image", "link", "page", "video"],
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "gpt-settings") {
      // @ts-ignore
      const url = chrome.runtime.getManifest().options_ui.page;

      chrome.tabs.create({
        url: chrome.runtime.getURL(`${url}#/settings`),
      });
    }
  });
} catch (e) {
  console.log(e);
}

// try {
//   chrome.contextMenus.create({
//     id: "gpt-replace",
//     title: "Replace this with ChatGPT output",
//     contexts: ["editable"],
//   });

//   chrome.contextMenus.onClicked.addListener((info, tab) => {
//     if (info.menuItemId === "gpt-replace") {
//       // @ts-ignore
//       //   const url = chrome.runtime.getManifest().options_ui.page;

//       //   chrome.tabs.create({
//       //     url: chrome.runtime.getURL(`${url}#/settings`),
//       //   });
//       console.log(info, tab);
//     }
//   });
// } catch (e) {
//   console.log(e);
// }

console.log("initialized context menus");
