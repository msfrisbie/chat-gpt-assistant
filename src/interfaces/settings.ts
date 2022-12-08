import { ChatGptMessageType, ChatGptSettingsKey } from "../consts";

export interface ISettings {
  [ChatGptSettingsKey.ENABLE_CONTENT_SCRIPT]: boolean;
  [ChatGptSettingsKey.EAGER_SEARCH]: boolean;
  [ChatGptSettingsKey.IFRAME_POPUP]: boolean;
}

export interface IChatGptPostMessage {
  messageType: ChatGptMessageType;
  data?: any;
}
