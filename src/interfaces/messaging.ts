import {
    ChatGptMessageType,
    ChatGptSettingsKey,
    ResponseBehaviorType,
  } from "../consts";

export interface IChatGptPostMessage {
    messageType: ChatGptMessageType;
    data?: any;
  }
  