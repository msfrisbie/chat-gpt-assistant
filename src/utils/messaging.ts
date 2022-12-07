import { v4 as uuidv4 } from "uuid";
import { MessageType } from "../consts";
import { ChannelId, IWrappedMessage } from "../interfaces/settings";

export function wrapMessage(
  channelId: ChannelId,
  messageType: MessageType,
  message: any
): IWrappedMessage {
  return {
    channelId,
    messageType,
    message,
  };
}

export class ContentScriptMessageChannel {
  channelId: ChannelId = uuidv4();
  port: chrome.runtime.Port | null = null;

  resetChannelId() {
    // All incoming messages from previous channelId will be ignored
    this.channelId = uuidv4();
  }

  connect() {
    if (!!this.port) {
      throw new Error("Port is already connected");
    }

    this.port = chrome.runtime.connect();
  }

  send(message: any) {
    if (!this.port) {
      throw new Error("Port is not connected");
    }

    console.log("sending", message);

    this.port.postMessage(
      wrapMessage(this.channelId, MessageType.SEND_PROMPT, message)
    );
  }

  addMessageHandler(
    messageType: MessageType,
    handler: (message: any, port: chrome.runtime.Port) => void
  ) {
    if (!this.port) {
      throw new Error("Port is not connected");
    }

    console.log("adding handler", messageType);

    this.port.onMessage.addListener(
      (wrappedMessage: IWrappedMessage, port: chrome.runtime.Port) => {
        console.log("response", { wrappedMessage, messageType });

        if (wrappedMessage.channelId !== this.channelId) {
          return;
        }

        if (wrappedMessage.messageType !== messageType) {
          return;
        }

        handler(wrappedMessage.message, port);
      }
    );
  }
}
