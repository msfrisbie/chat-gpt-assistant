import React, { createContext, useReducer } from "react";
import { CHAT_GPT_HISTORY_KEY } from "../../consts";
import { SearchContextAction } from "./consts";
import { ISearchContextState } from "./interfaces";
import { initialState, reducer } from "./reducer";

export const SearchContext = createContext({} as ISearchContextState);

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    ...state,
    executeSearch: (query: string) => {
      dispatch({
        type: SearchContextAction.EXECUTE_SEARCH,
        payload: {
          query,
        },
      });
    },
    setHistory: (history: string[]) => {
      dispatch({
        type: SearchContextAction.SET_HISTORY,
        payload: {
          history,
        },
      });
    },
    removeHistoryItem: (historyElement: string) => {
      dispatch({
        type: SearchContextAction.REMOVE_HISTORY_ITEM,
        payload: {
          historyElement,
        },
      });
    },
    resetSearch: () => {
      dispatch({
        type: SearchContextAction.RESET_SEARCH,
      });
    },
    searchSuccessInflight: () => {
      dispatch({
        type: SearchContextAction.SEARCH_SUCCESS_INFLIGHT,
      });
    },
    searchSuccessComplete: () => {
      dispatch({
        type: SearchContextAction.SEARCH_SUCCESS_COMPLETE,
      });
    },
    searchError: () => {
      dispatch({
        type: SearchContextAction.SEARCH_ERROR,
      });
    },
    searchUnauthorized: () => {
      dispatch({
        type: SearchContextAction.SEARCH_UNAUTHORIZED,
      });
    },
  };

  // Initialize the history onload
  chromeGet(CHAT_GPT_HISTORY_KEY).then((history: any) => {
    if (history) {
      value.setHistory(history);
    }
  });

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
