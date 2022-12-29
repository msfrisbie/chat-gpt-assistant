import { createSlice } from "@reduxjs/toolkit";
import { ChatGptConversationState, CHAT_GPT_HISTORY_KEY } from "../../consts";
import { ISearchState } from "./interfaces";

const initialState: ISearchState = {
  chatGptConversationState: ChatGptConversationState.INITIAL,
  inputValue: "",
  query: "",
  history: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    executeSearch(state, action: { payload: { prompt: string } }) {
      const updatedHistory = [
        action.payload.prompt,
        ...state.history.filter((x) => x !== action.payload.prompt),
      ].slice(0, 100);

      // This might execute eagerly, delay
      setTimeout(() => {
        chrome.storage.local.set({ [CHAT_GPT_HISTORY_KEY]: updatedHistory });
      }, 500);

      console.log("execute search");

      state.inputValue = action.payload.prompt;
      state.query = action.payload.prompt;
      state.chatGptConversationState = ChatGptConversationState.LOADING;
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
      state.chatGptConversationState = ChatGptConversationState.INITIAL;
    },
    searchSuccessInflight(state, action) {
      state.chatGptConversationState =
        ChatGptConversationState.SUCCESS_INFLIGHT;
    },
    searchSuccessComplete(state, action) {
      state.chatGptConversationState =
        ChatGptConversationState.SUCCESS_COMPLETE;
    },
    searchError(state, action) {
      state.chatGptConversationState = ChatGptConversationState.ERROR;
    },
    searchUnauthorized(state, action) {
      state.chatGptConversationState = ChatGptConversationState.UNAUTHORIZED;
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
