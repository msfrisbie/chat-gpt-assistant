import { createParser } from "eventsource-parser";
import ExpiryMap from "expiry-map";
import { v4 as uuidv4 } from "uuid";
import {
  ChatGptSettingsKey,
  KEY_ACCESS_TOKEN,
  ResponseBehaviorType,
  STUB_RESPONSE,
} from "../consts";
import {
  ChatGptPromptPayload,
  ChatGptSSEMessage,
} from "../interfaces/settings";
import { getSetting } from "./settings";

export const cache = new ExpiryMap(10 * 1000);

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

export async function getAccessToken() {
  console.debug("Retrieving access token...");

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

export async function getAnswer(
  question: string,
  callback: ({ done, answer }: { done: boolean; answer?: string }) => void
) {
  const debug: boolean = !!(await getSetting(ChatGptSettingsKey.DEBUG));

  if (debug) {
    console.log("Debug mode enabled");
    const responseBehaviorType = await getSetting(
      ChatGptSettingsKey.RESPONSE_BEHAVIOR_TYPE
    );

    switch (responseBehaviorType) {
      case ResponseBehaviorType.STUB_ANSWER:
        for (let i = 0; i < STUB_RESPONSE.length; ++i) {
          callback({ done: false, answer: STUB_RESPONSE.slice(0, i) });
          await new Promise((resolve) => setTimeout(resolve, 10));
        }
        callback({ done: true });
        return;
      case ResponseBehaviorType.STUB_ERROR:
        throw new Error("STUB ERROR");
      case ResponseBehaviorType.STUB_UNAUTHORIZED:
        throw new Error("UNAUTHORIZED");
      case ResponseBehaviorType.DEFAULT:
      default:
        break;
    }
  }

  const accessToken = await getAccessToken();

  const payload: ChatGptPromptPayload = {
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
  };

  console.debug("Dispatching to API...", question);

  await fetchSSE("https://chat.openai.com/backend-api/conversation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(payload),
    onMessage(message: any) {
      console.debug("sse message", message);
      if (message === "[DONE]") {
        callback({ done: true });
        return;
      }
      const data: ChatGptSSEMessage = JSON.parse(message);
      const text = data.message?.content?.parts?.[0];
      if (text) {
        callback({ done: false, answer: text });
      }
    },
  });
}
