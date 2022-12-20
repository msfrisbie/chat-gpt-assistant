import { ConversationResponseEvent } from "chatgpt";
import _ from "lodash";
import { ChatGptConversationState, CHAT_GPT_CONVERSATION_KEY } from "../consts";
import { IChatGptConversation } from "../interfaces/conversation";
import { chromeGet, chromeSet } from "../utils/storage";

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

const lazyWriteConversations = _.debounce(
  async function lazyWriteConversations() {
    chromeSet(CHAT_GPT_CONVERSATION_KEY, inMemoryConversations);
  },
  1000,
  {
    leading: true,
    maxWait: 1000,
    trailing: true,
  }
);

export async function handleConversationResponse(
  prompt: string,
  conversationResponse: ConversationResponseEvent,
  port: chrome.runtime.Port
) {
  console.debug({ conversationResponse });

  if (!conversationResponse.conversation_id) {
    throw new Error("Missing conversation ID");
  }

  await getConversation(conversationResponse.conversation_id);

  await maybeRecordConversationPrompt(
    prompt,
    conversationResponse.conversation_id
  );

  recordConversationResponse(conversationResponse);
}

export async function savedConversations(): Promise<IChatGptConversation[]> {
  return (await chromeGet(CHAT_GPT_CONVERSATION_KEY)) || [];
}

export async function maybeRecordConversationPrompt(
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

  if (![ChatGptConversationState.LOADING].includes(conversation.state)) {
    conversation.messages.push({
      prompt,
    });

    lazyWriteConversations();
  }
}

export async function recordConversationResponse(
  conversationResponse: ConversationResponseEvent
) {
  if (!conversationResponse.conversation_id) {
    throw new Error("Missing conversation_id");
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

  lazyWriteConversations();
}
