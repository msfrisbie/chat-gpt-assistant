import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import SearchContentScript from "./SearchContentScript";
import SharedWrapper from "./SharedWrapper";

export default function SearchContentScriptApp() {
  return (
    <Provider store={store}>
      <SharedWrapper>
        <SearchContentScript></SearchContentScript>
      </SharedWrapper>
    </Provider>
  );
}
