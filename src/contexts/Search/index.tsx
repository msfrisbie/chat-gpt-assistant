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
    resetSearch: () => {
      dispatch({
        type: SearchContextAction.RESET_SEARCH,
      });
    },
    searchSuccess: (output: string) => {
      dispatch({
        type: SearchContextAction.SEARCH_SUCCESS,
        payload: {
          output,
        },
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

  chrome.storage.local.get(CHAT_GPT_HISTORY_KEY).then((result: any) => {
    if (!result[CHAT_GPT_HISTORY_KEY]) {
      return;
    }

    value.setHistory(result[CHAT_GPT_HISTORY_KEY]);
  });

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
