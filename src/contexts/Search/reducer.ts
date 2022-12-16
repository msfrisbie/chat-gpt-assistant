import { ChatGptThreadState, CHAT_GPT_HISTORY_KEY } from "../../consts";
import { SearchContextAction } from "./consts";
import { ISearchContextAction, ISearchContextState } from "./interfaces";

export const reducer = (
  state: ISearchContextState,
  action: ISearchContextAction
): ISearchContextState => {
  switch (action.type) {
    case SearchContextAction.EXECUTE_SEARCH:
      const updatedHistory = [
        action.payload.query,
        ...state.history.filter((x) => x !== action.payload.query),
      ].slice(0, 100);

      chrome.storage.local.set({ [CHAT_GPT_HISTORY_KEY]: updatedHistory });

      console.log("execute search");

      return {
        ...state,
        chatGptResultState: ChatGptThreadState.LOADING,
        query: action.payload.query,
        history: updatedHistory,
      };

    case SearchContextAction.SET_HISTORY:
      return {
        ...state,
        history: action.payload.history,
      };

    case SearchContextAction.REMOVE_HISTORY_ITEM:
      console.log(
        action.payload.historyElement,
        state.history.filter((x) => x !== action.payload.historyElement)
      );

      const filteredHistory = state.history.filter(
        (x) => x !== action.payload.historyElement
      );

      chrome.storage.local.set({ [CHAT_GPT_HISTORY_KEY]: filteredHistory });

      return {
        ...state,
        history: filteredHistory,
      };

    case SearchContextAction.RESET_SEARCH:
      return {
        ...state,
        chatGptResultState: ChatGptThreadState.INITIAL,
        query: "",
      };
    case SearchContextAction.SEARCH_SUCCESS_INFLIGHT:
      return {
        ...state,
        chatGptResultState: ChatGptThreadState.SUCCESS_INFLIGHT,
      };
    case SearchContextAction.SEARCH_SUCCESS_COMPLETE:
      return {
        ...state,
        chatGptResultState: ChatGptThreadState.SUCCESS_COMPLETE,
      };
    case SearchContextAction.SEARCH_UNAUTHORIZED:
      return {
        ...state,
        chatGptResultState: ChatGptThreadState.UNAUTHORIZED,
      };
    case SearchContextAction.SEARCH_ERROR:
      return {
        ...state,
        chatGptResultState: ChatGptThreadState.ERROR,
      };
    default:
      throw new Error("Unmatched state");
  }
};

export const initialState: ISearchContextState = {
  chatGptResultState: ChatGptThreadState.INITIAL,
  query: "",
  history: [],
};
