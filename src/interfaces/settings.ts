import { ChatGptSettingsKey, MessageType } from "../consts";

export interface ISettings {
  [ChatGptSettingsKey.ENABLE_CONTENT_SCRIPT]: boolean;
  [ChatGptSettingsKey.EAGER_SEARCH]: boolean;
  [ChatGptSettingsKey.IFRAME_POPUP]: boolean;
  [ChatGptSettingsKey.RETURN_STUB_MESSAGE]: boolean;
}

export interface IWrappedMessage {
  channelId: ChannelId;
  messageType: MessageType;
  message: any;
}

export type ChannelId = string;
