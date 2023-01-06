import {
  ChatGptMessageType,
  ChatGptSettingsKey,
  ResponseBehaviorType,
} from "../consts";

export interface ISettings {
  [ChatGptSettingsKey.ENABLE_CONTENT_SCRIPT]: boolean;
  [ChatGptSettingsKey.EAGER_SEARCH]: boolean;
  [ChatGptSettingsKey.SHORT_SEARCH_RESPONSES]: boolean;
  [ChatGptSettingsKey.IFRAME_POPUP]: boolean;
  [ChatGptSettingsKey.AUTO_REFRESH_SESSION]: boolean;
  [ChatGptSettingsKey.KEEP_CHATGPT_PINNED]: boolean;
  [ChatGptSettingsKey.DEBUG]: boolean;
  [ChatGptSettingsKey.RESPONSE_BEHAVIOR_TYPE]: ResponseBehaviorType;
  [ChatGptSettingsKey.ENABLE_EMAIL]: boolean;
  [ChatGptSettingsKey.EMAIL_LENGTH]: string;
  [ChatGptSettingsKey.EMAIL_STYLE]: string;
  [ChatGptSettingsKey.EMAIL_URGENCY]: string;
  [ChatGptSettingsKey.EMAIL_TONE]: string;
}

export interface IChatGptPostMessage {
  messageType: ChatGptMessageType;
  data?: any;
}

export type UUID = string;

export interface ChatGptSSEMessage {
  message: {
    id: UUID;
    role: "assistant";
    user: null;
    create_time: null;
    update_time: null;
    content: {
      content_type: "text";
      parts: string[];
    };
    end_turn: null;
    weight: 1.0;
    metadata: {};
    recipient: "all";
  };
  conversation_id: UUID;
  error: null;
}

export interface ChatGptPromptPayload {
  action: "next" | "variant";
  messages: [
    {
      id: UUID;
      role: "user";
      content: {
        content_type: "text";
        parts: string[];
      };
    }
  ];
  model: "text-davinci-002-render";
  parent_message_id: UUID;
}
