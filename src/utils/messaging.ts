import { ChatGptMessageType } from "../consts";
import { IChatGptPostMessage } from "../interfaces/settings";

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
