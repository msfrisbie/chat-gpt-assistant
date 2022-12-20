import { ChatGptConversationState, CHAT_GPT_HISTORY_KEY } from "../../consts";
import { chromeSet } from "../../utils/storage";
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

      chromeSet(CHAT_GPT_HISTORY_KEY, updatedHistory);

      return {
        ...state,
        chatGptResultState: ChatGptConversationState.LOADING,
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

      chromeSet(CHAT_GPT_HISTORY_KEY, filteredHistory);

      return {
        ...state,
        history: filteredHistory,
      };

    case SearchContextAction.RESET_SEARCH:
      return {
        ...state,
        chatGptResultState: ChatGptConversationState.INITIAL,
        query: "",
      };
    case SearchContextAction.SEARCH_SUCCESS_INFLIGHT:
      return {
        ...state,
        chatGptResultState: ChatGptConversationState.SUCCESS_INFLIGHT,
      };
    case SearchContextAction.SEARCH_SUCCESS_COMPLETE:
      return {
        ...state,
        chatGptResultState: ChatGptConversationState.SUCCESS_COMPLETE,
      };
    case SearchContextAction.SEARCH_UNAUTHORIZED:
      return {
        ...state,
        chatGptResultState: ChatGptConversationState.UNAUTHORIZED,
      };
    case SearchContextAction.SEARCH_ERROR:
      return {
        ...state,
        chatGptResultState: ChatGptConversationState.ERROR,
      };
    default:
      throw new Error("Unmatched state");
  }
};

export const initialState: ISearchContextState = {
  chatGptResultState: ChatGptConversationState.INITIAL,
  query: "",
  history: [],
};
