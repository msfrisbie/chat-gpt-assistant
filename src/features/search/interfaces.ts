import { ChatGptConversationState } from "../../consts";
import { SearchAction } from "./consts";

export interface ISearchState {
  chatGptConversationState: ChatGptConversationState;
  query: string;
  inputValue: string;
  history: string[];
}

export interface ISearchAction {
  type: SearchAction;
  payload?: any;
}
