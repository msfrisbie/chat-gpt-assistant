import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./features/email/emailSlice";
import searchReducer from "./features/search/searchSlice";
import sharedReducer from "./features/shared/sharedSlice";

export const store = configureStore({
  reducer: {
    shared: sharedReducer,
    search: searchReducer,
    email: emailReducer,
  },
});
