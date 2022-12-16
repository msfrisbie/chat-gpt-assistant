import { v4 as uuidv4 } from "uuid";
import { ChatGPTAPI } from "../../node_modules/chatgpt/build/browser/index.js";
import {
  ChatGptMessageType,
  ChatGptSettingsKey,
  KEY_ACCESS_TOKEN,
  ResponseBehaviorType,
  STUB_RESPONSE,
  UNAUTHORIZED_ERROR,
} from "../consts";
import { IChatGptPostMessage } from "../interfaces/settings";
import { cache, getAccessToken } from "../utils/chatgpt";
import { getSetting } from "../utils/settings";

export function sendMessage(
  port: chrome.runtime.Port,
  messageType: ChatGptMessageType,
  data?: any
) {
  port.postMessage({
    messageType,
    data,
  });
}

export function sendPromptFromContentScript(
  prompt: string,
  messageHandler: (message: IChatGptPostMessage) => void
) {
  const port = chrome.runtime.connect();
  port.onMessage.addListener((message: IChatGptPostMessage) =>
    messageHandler(message)
  );
  port.onDisconnect.addListener(() => console.log("Port disconnected"));
  sendMessage(port, ChatGptMessageType.SEND_PROMPT_FROM_CS, {
    localId: uuidv4(),
    // conversationId: uuidv4(),
    // parentMessageId: uuidv4(),
    question: prompt,
  });
}

export async function backgroundHandleConnect(port: chrome.runtime.Port) {
  port.onDisconnect.addListener(() => console.log("Port disconnected"));

  port.onMessage.addListener(async (msg: IChatGptPostMessage) => {
    switch (msg.messageType) {
      case ChatGptMessageType.SEND_PROMPT_FROM_CS:
        console.debug("Received question:", msg.data.question.slice(0, 20));

        const debug: boolean = !!(await getSetting(ChatGptSettingsKey.DEBUG));

        if (debug) {
          console.log("Debug mode enabled");

          const responseBehaviorType = await getSetting(
            ChatGptSettingsKey.RESPONSE_BEHAVIOR_TYPE
          );

          switch (responseBehaviorType) {
            case ResponseBehaviorType.STUB_ANSWER:
              for (let i = 0; i < STUB_RESPONSE.length; ++i) {
                sendMessage(port, ChatGptMessageType.ANSWER_TEXT_FROM_BG, {
                  answer: STUB_RESPONSE.slice(0, i),
                });
                await new Promise((resolve) => setTimeout(resolve, 10));
              }
              await sendMessage(port, ChatGptMessageType.ANSWER_DONE_FROM_BG);
              port.disconnect();
              return;
            case ResponseBehaviorType.STUB_ERROR:
              sendMessage(port, ChatGptMessageType.ANSWER_ERROR_FROM_BG, {
                error: "STUB_ERROR",
              });
              return;
            case ResponseBehaviorType.STUB_UNAUTHORIZED:
              sendMessage(port, ChatGptMessageType.ANSWER_ERROR_FROM_BG, {
                error: UNAUTHORIZED_ERROR,
              });
              return;
            case ResponseBehaviorType.DEFAULT:
            default:
              break;
          }
        }

        let api: ChatGPTAPI;

        try {
          const sessionToken = await getAccessToken();

          api = new ChatGPTAPI({
            sessionToken,
          });

          await api.ensureAuth();
        } catch (e) {
          sendMessage(port, ChatGptMessageType.ANSWER_ERROR_FROM_BG, {
            error: UNAUTHORIZED_ERROR,
          });
          return;
        }

        try {
          const conversation = api.getConversation({
            conversationId: msg.data.conversationId,
            parentMessageId: msg.data.parentMessageId,
          });

          await conversation.sendMessage(msg.data.question, {
            onProgress(progressResponse) {
              console.debug({ progressResponse });
              sendMessage(port, ChatGptMessageType.ANSWER_TEXT_FROM_BG, {
                answer: progressResponse,
              });
            },
            onConversationResponse(conversationResponse) {
              console.debug({ conversationResponse });
              sendMessage(
                port,
                ChatGptMessageType.ANSWER_DONE_FROM_BG,
                conversationResponse
              );
            },
          });
          port.disconnect();
        } catch (e) {
          console.error(e);
          sendMessage(port, ChatGptMessageType.ANSWER_ERROR_FROM_BG, {
            error: e.message,
          });
          port.disconnect();
          cache.delete(KEY_ACCESS_TOKEN);
        }
        break;
      default:
        throw new Error("Unrecognized message type");
    }
  });
}
