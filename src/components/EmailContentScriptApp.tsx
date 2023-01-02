import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import EmailContentScript from "./EmailContentScript";
import SharedWrapper from "./SharedWrapper";

export default function EmailContentScriptApp() {
  return (
    <Provider store={store}>
      <SharedWrapper>
        <EmailContentScript></EmailContentScript>
      </SharedWrapper>
    </Provider>
  );
}
