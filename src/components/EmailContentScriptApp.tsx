import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import EmailContentScript from "./EmailContentScript";
import SharedWrapper from "./SharedWrapper";

export default function EmailContentScriptApp(props: any) {
  return (
    <Provider store={store}>
      <SharedWrapper widgetId={props.widgetId}>
        <EmailContentScript></EmailContentScript>
      </SharedWrapper>
    </Provider>
  );
}
