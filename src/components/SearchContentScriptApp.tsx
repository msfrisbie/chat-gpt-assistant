import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import SearchContentScript from "./SearchContentScript";

export default function SearchContentScriptApp() {
  return (
    <Provider store={store}>
      <SearchContentScript></SearchContentScript>
    </Provider>
  );
}
