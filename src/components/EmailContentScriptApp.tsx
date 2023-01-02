import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import EmailContentScript from "./EmailContentScript";

export default function EmailContentScriptApp() {
  return (
    <Provider store={store}>
      <EmailContentScript></EmailContentScript>
    </Provider>
  );
}
