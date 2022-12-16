import { ChatGptConversationState } from "../consts";

export interface IChatGptConversation {
  // Used to access locally
  localId: string;
  messages: IChatGptMessage[];
  state: ChatGptConversationState;
  version: number;
}

export interface IChatGptMessage {
  messageId: string;
  conversationId: string;
  role: "user" | "assistant";
  text: string;
}
