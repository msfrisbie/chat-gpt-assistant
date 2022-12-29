import { ChatGptConversationState } from "../../consts";
import { SearchContextAction } from "./consts";

export interface ISearchContextState {
  chatGptConversationState: ChatGptConversationState;
  query: string;
  history: string[];
  executeSearch: (query: string) => void;
  setHistory: (history: string[]) => void;
  removeHistoryItem: (historyItem: string) => void;
  resetSearch: () => void;
  searchSuccessInflight: () => void;
  searchSuccessComplete: () => void;
  searchError: () => void;
  searchUnauthorized: () => void;
}

export interface ISearchContextAction {
  type: SearchContextAction;
  payload?: any;
}
