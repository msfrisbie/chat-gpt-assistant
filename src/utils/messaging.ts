import { ChatGPTAPI } from "../../node_modules/chatgpt/build/browser/index.js";
import {
  ChatGptMessageType,
  ChatGptSettingsKey,
  KEY_ACCESS_TOKEN,
  ResponseBehaviorType,
  STUB_RESPONSE,
  UNAUTHORIZED_ERROR,
} from "../consts";
import { IChatGptPostMessage } from "../interfaces/messaging";
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
    question: prompt,
  });
}

export async function sendPromptFromContentScriptV2({
  prompt,
  conversationId,
}: {
  prompt: string;
  conversationId?: string;
}): Promise<IChatGptPostMessage> {
  const message: IChatGptPostMessage = {
    messageType: ChatGptMessageType.SEND_PROMPT_FROM_CS,
    data: {
      prompt,
      conversationId,
    },
  };

  return chrome.runtime.sendMessage(message);
}



export async function handleMessageFromContentScript(
  message: IChatGptPostMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: IChatGptPostMessage) => void
) {
  switch (message.messageType) {
    case ChatGptMessageType.SEND_PROMPT_FROM_CS:
      console.debug("Received question:", message.data.question.slice(0, 20));

      const debug: boolean = !!(await getSetting(ChatGptSettingsKey.DEBUG));

      if (debug) {
        console.log("Debug mode enabled");

        const responseBehaviorType = await getSetting(
          ChatGptSettingsKey.RESPONSE_BEHAVIOR_TYPE
        );

        // TODO
        switch (responseBehaviorType) {
          case ResponseBehaviorType.STUB_ANSWER:
            // for (let i = 0; i < STUB_RESPONSE.length; ++i) {
            //   sendMessage(port, ChatGptMessageType.ANSWER_TEXT_FROM_BG, {
            //     answer: STUB_RESPONSE.slice(0, i),
            //   });
            //   await new Promise((resolve) => setTimeout(resolve, 10));
            // }
            // await sendMessage(port, ChatGptMessageType.ANSWER_DONE_FROM_BG);
            // port.disconnect();
            return;
          case ResponseBehaviorType.STUB_ERROR:
            // sendMessage(port, ChatGptMessageType.ANSWER_ERROR_FROM_BG, {
            //   error: "STUB_ERROR",
            // });
            return;
          case ResponseBehaviorType.STUB_UNAUTHORIZED:
            // sendMessage(port, ChatGptMessageType.ANSWER_ERROR_FROM_BG, {
            //   error: UNAUTHORIZED_ERROR,
            // });
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
        // sendMessage(port, ChatGptMessageType.ANSWER_ERROR_FROM_BG, {
        //   error: UNAUTHORIZED_ERROR,
        // });
        return;
      }

      // TODO lookup conversation
      // TODO get parentMessageId

      try {
        const conversation = api.getConversation({
          conversationId: message.data.conversationId,
          // parentMessageId: msg.data.parentMessageId,
        });

        await conversation.sendMessage(message.data.question, {
          onProgress(progressResponse) {
            console.debug({ progressResponse });
            // sendMessage(port, ChatGptMessageType.ANSWER_TEXT_FROM_BG, {
            //   answer: progressResponse,
            // });
          },
          onConversationResponse(conversationResponse) {
            console.debug({ conversationResponse });
            writeConversationResponse(conversationResponse);
            // {
            //   action: "next",
            //   messages: [
            //     {
            //       id: "aeac2d84-4926-4e15-b525-5d266aba6931",
            //       role: "user",
            //       content: { content_type: "text", parts: ["test"] },
            //     },
            //   ],
            //   parent_message_id: "db025ee7-7aa9-456e-87da-41cd06e73398",
            //   model: "text-davinci-002-render",
            // }

            //   {
            //     "message": {
            //         "id": "42bb1fe5-4973-4c98-a54a-a13510f5d6fd",
            //         "role": "assistant",
            //         "user": null,
            //         "create_time": null,
            //         "update_time": null,
            //         "content": {
            //             "content_type": "text",
            //             "parts": [
            //                 "Hello! How can I help you today? Do you have any specific questions or topics you would like to discuss"
            //             ]
            //         },
            //         "end_turn": null,
            //         "weight": 1,
            //         "metadata": {},
            //         "recipient": "all"
            //     },
            //     "conversation_id": "16a17c30-451f-463a-8efa-22b9ed44c75e",
            //     "error": null
            // }
            // sendMessage(
            //   port,
            //   ChatGptMessageType.ANSWER_DONE_FROM_BG,
            //   conversationResponse
            // );
          },
        });
        // port.disconnect();
      } catch (e) {
        console.error(e);
        // sendMessage(port, ChatGptMessageType.ANSWER_ERROR_FROM_BG, {
        //   error: e.message,
        // });
        // port.disconnect();
        cache.delete(KEY_ACCESS_TOKEN);
      }
      break;
    default:
      throw new Error("Unrecognized message type");
  }
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
              // {
              //   action: "next",
              //   messages: [
              //     {
              //       id: "aeac2d84-4926-4e15-b525-5d266aba6931",
              //       role: "user",
              //       content: { content_type: "text", parts: ["test"] },
              //     },
              //   ],
              //   parent_message_id: "db025ee7-7aa9-456e-87da-41cd06e73398",
              //   model: "text-davinci-002-render",
              // }

              //   {
              //     "message": {
              //         "id": "42bb1fe5-4973-4c98-a54a-a13510f5d6fd",
              //         "role": "assistant",
              //         "user": null,
              //         "create_time": null,
              //         "update_time": null,
              //         "content": {
              //             "content_type": "text",
              //             "parts": [
              //                 "Hello! How can I help you today? Do you have any specific questions or topics you would like to discuss"
              //             ]
              //         },
              //         "end_turn": null,
              //         "weight": 1,
              //         "metadata": {},
              //         "recipient": "all"
              //     },
              //     "conversation_id": "16a17c30-451f-463a-8efa-22b9ed44c75e",
              //     "error": null
              // }
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
