import { ChatGptThreadState } from "../../consts";

export interface ISearchState {
  chatGptResultState: ChatGptThreadState;
  query: string;
  inputValue: string;
  history: string[];
}
