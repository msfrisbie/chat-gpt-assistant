import { ChatGptThreadState } from "../../consts";

export interface ISearchState {
  chatGptResultState: ChatGptThreadState;
  query: string;
  hiddenPrefix: string;
  hiddenSuffix: string;
  inputValue: string;
  history: string[];
}
