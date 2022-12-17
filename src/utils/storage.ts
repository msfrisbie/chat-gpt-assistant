import _ from "lodash";
import { CHAT_GPT_CONVERSATION_KEY } from "~consts";
import { IChatGptConversation, IChatGptConversationResponse } from "../interfaces/conversation";

export async function set(key: string, value: any) {
  return chrome.storage.local.set({ [key]: value });
}

export async function get(key: string): Promise<any> {
  const result = await chrome.storage.local.get(key);

  return result[key];
}

export const writeConversationResponse = _.debounce(
  async (conversationResponse: IChatGptConversationResponse) => {
    const savedConversations: IChatGptConversation[] = await get(CHAT_GPT_CONVERSATION_KEY) || [];

    let matchingConvesation = savedConversations.find(x => x.conversationId === conversationResponse.conversation_id);

    if (!matchingConvesation) {
      
    }
  },
  500,
  {
    leading: true,
    maxWait: 1000,
    trailing: true,
  }
);
