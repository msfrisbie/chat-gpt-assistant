import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import ContentScript from "./ContentScript";

export default function ContentScriptApp() {
  return (
    <Provider store={store}>
      <ContentScript></ContentScript>
    </Provider>
  );
}
