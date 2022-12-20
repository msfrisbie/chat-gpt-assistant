import { ConversationResponseEvent } from "chatgpt/build/browser";
import { ChatGptConversationState } from "../consts";

export interface IChatGptConversation {
  messages: IChatGptMessage[];
  state: ChatGptConversationState;
  version: number;
  conversationId: string;
  // conversationId is lazily evaluated, so we need an ID
  // from the start to identify a conversation
  sessionId: string;
}

export interface IChatGptMessage {
  prompt?: string;
  response?: ConversationResponseEvent;
}
