import { createSlice } from "@reduxjs/toolkit";
import { ChatGptThreadState, CHAT_GPT_HISTORY_KEY } from "../../consts";
import { ISearchState } from "./interfaces";

const initialState: ISearchState = {
  chatGptResultState: ChatGptThreadState.INITIAL,
  inputValue: "",
  query: "",
  hiddenPrefix: "",
  hiddenSuffix: "",
  history: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    executeSearch(state, action: { payload: { prompt: string, hiddenPrefix?: string, hiddenSuffix?: string } }) {
      const updatedHistory = [
        action.payload.prompt,
        ...state.history.filter((x) => x !== action.payload.prompt),
      ].slice(0, 100);

      // This might execute eagerly, delay
      setTimeout(() => {
        chrome.storage.local.set({ [CHAT_GPT_HISTORY_KEY]: updatedHistory });
      }, 500);

      state.inputValue = action.payload.prompt;
      state.query = action.payload.prompt;
      state.hiddenPrefix = action.payload.hiddenPrefix;
      state.hiddenSuffix = action.payload.hiddenSuffix;
      state.chatGptResultState = ChatGptThreadState.LOADING;
      state.history = updatedHistory;
    },
    setInputValue(state, action: { payload: { inputValue: string } }) {
      state.inputValue = action.payload.inputValue;
    },
    setHistory(state, action: { payload: { history: string[] } }) {
      state.history = action.payload.history;
    },
    removeHistoryItem(state, action: { payload: { historyElement: string } }) {
      const filteredHistory = state.history.filter(
        (x) => x !== action.payload.historyElement
      );

      chrome.storage.local.set({ [CHAT_GPT_HISTORY_KEY]: filteredHistory });

      state.history = filteredHistory;
    },
    resetSearch(state, action) {
      state.inputValue = "";
      state.query = "";
      state.hiddenPrefix = "";
      state.hiddenSuffix = "";
      state.chatGptResultState = ChatGptThreadState.INITIAL;
    },
    searchSuccessInflight(state, action) {
      state.chatGptResultState = ChatGptThreadState.SUCCESS_INFLIGHT;
    },
    searchSuccessComplete(state, action) {
      state.chatGptResultState = ChatGptThreadState.SUCCESS_COMPLETE;
    },
    searchError(state, action) {
      state.chatGptResultState = ChatGptThreadState.ERROR;
    },
    searchUnauthorized(state, action) {
      state.chatGptResultState = ChatGptThreadState.UNAUTHORIZED;
    },
  },
});

export const {
  executeSearch,
  setHistory,
  removeHistoryItem,
  setInputValue,
  resetSearch,
  searchSuccessInflight,
  searchSuccessComplete,
  searchError,
  searchUnauthorized,
  loadHistory,
} = searchSlice.actions;

export default searchSlice.reducer;
