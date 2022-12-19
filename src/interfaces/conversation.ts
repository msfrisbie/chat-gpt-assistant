import { ConversationResponseEvent } from "chatgpt/build/browser";
import { ChatGptConversationState } from "../consts";

export interface IChatGptConversation {
  messages: IChatGptMessage[];
  state: ChatGptConversationState;
  version: number;
  conversationId: string;
}

export interface IChatGptMessage {
  prompt?: string;
  response?: ConversationResponseEvent;
}
