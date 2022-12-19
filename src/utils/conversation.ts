import { ConversationResponseEvent } from "chatgpt";
import _ from "lodash";
import { ChatGptConversationState, CHAT_GPT_CONVERSATION_KEY } from "~consts";
import { IChatGptConversation } from "../interfaces/conversation";

let inMemoryConversations: IChatGptConversation[] | null = null;
getConversations();

async function getConversations(): Promise<IChatGptConversation[]> {
  if (inMemoryConversations === null) {
    inMemoryConversations = ((await chromeGet(CHAT_GPT_CONVERSATION_KEY)) ||
      []) as IChatGptConversation[];
  }

  return inMemoryConversations;
}

export async function getConversation(
  conversationId: string
): Promise<IChatGptConversation | undefined> {
  const conversations = await getConversations();

  return conversations.find((x) => x.conversationId === conversationId);
}

const writeConversations = _.debounce(
  async function writeConversations() {
    chromeSet(CHAT_GPT_CONVERSATION_KEY, inMemoryConversations);
  },
  1000,
  {
    maxWait: 1000,
    trailing: true,
  }
);

export async function savedConversations(): Promise<IChatGptConversation[]> {
  return (await chromeGet(CHAT_GPT_CONVERSATION_KEY)) || [];
}

export async function recordConversationPrompt(
  prompt: string,
  conversationId: string
) {
  const conversation: IChatGptConversation = (await getConversation(
    conversationId
  )) || {
    conversationId,
    version: 1,
    state: ChatGptConversationState.INITIAL,
    messages: [],
  };

  conversation.messages.push({
    prompt,
  });

  writeConversations();
}

export async function recordConversationResponse(
  conversationResponse: ConversationResponseEvent
) {
  if (!conversationResponse.conversation_id) {
    throw new Error("Missinc conversation_id");
  }

  const conversation: IChatGptConversation | undefined = await getConversation(
    conversationResponse.conversation_id
  );

  if (!conversation) {
    throw new Error("Could not match conversation");
  }

  let addedResponse = false;
  for (const [idx, message] of conversation.messages.entries()) {
    if (message.response?.message?.id === conversationResponse.message?.id) {
      conversation.messages[idx].response = conversationResponse;
      addedResponse = true;
      break;
    }
  }

  if (!addedResponse) {
    conversation.messages.push({
      response: conversationResponse,
    });
  }

  writeConversations();
}
