import { ChatGptConversationState } from "../consts";

export interface IChatGptConversation {
  messages: IChatGptMessage[];
  state: ChatGptConversationState;
  version: number;
  conversationId: string;
}

export interface IChatGptMessage {
  messageId?: string;
  role: "user" | "assistant";
  text: string;
}

export interface IChatGptConversationResponse {
  message: {
    id: string;
    role: "user" | "assistant";
    user: null;
    create_time: null;
    update_time: null;
    content: {
      content_type: "text";
      parts: string[];
    };
    end_turn: null;
    weight: 1;
    metadata: {};
    recipient: "all";
  };
  conversation_id: string;
  error: {} | null;
}
