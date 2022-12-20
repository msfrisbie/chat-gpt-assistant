import { ChatGptThreadState } from "../../consts";
import { SearchAction } from "./consts";

export interface ISearchState {
  chatGptResultState: ChatGptThreadState;
  query: string;
  inputValue: string;
  history: string[];
}

export interface ISearchAction {
  type: SearchAction;
  payload?: any;
}
