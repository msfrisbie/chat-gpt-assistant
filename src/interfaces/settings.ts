import {
  ChatGptMessageType,
  ChatGptSettingsKey,
  ResponseBehaviorType,
} from "../consts";

export interface ISettings {
  [ChatGptSettingsKey.ENABLE_CONTENT_SCRIPT]: boolean;
  [ChatGptSettingsKey.EAGER_SEARCH]: boolean;
  [ChatGptSettingsKey.IFRAME_POPUP]: boolean;
  [ChatGptSettingsKey.DEBUG]: boolean;
  [ChatGptSettingsKey.RESPONSE_BEHAVIOR_TYPE]: ResponseBehaviorType;
}

export interface IChatGptPostMessage {
  messageType: ChatGptMessageType;
  data?: any;
}
