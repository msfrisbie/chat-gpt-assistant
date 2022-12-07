import { ChatGptResultState } from "../../consts";
import { SearchContextAction } from "./consts";

export interface ISearchContextState {
  chatGptResultState: ChatGptResultState;
  query: string;
  output: string;
  history: string[];
  executeSearch: (query: string) => void;
  setHistory: (history: string[]) => void;
  resetSearch: () => void;
  searchSuccess: (output: string) => void;
  searchError: () => void;
  searchUnauthorized: () => void;
}

export interface ISearchContextAction {
  type: SearchContextAction;
  payload?: any;
}
