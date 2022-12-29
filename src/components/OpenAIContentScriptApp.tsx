import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import OpenAIContentScript from "./OpenAIContentScript";

export default function OpenAIContentScriptApp() {
  return (
    <Provider store={store}>
      <OpenAIContentScript></OpenAIContentScript>
    </Provider>
  );
}
