import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import Options from "./Options";
import SharedWrapper from "./SharedWrapper";

export default function OptionsApp() {
  return (
    <Provider store={store}>
      <SharedWrapper>
        <Options></Options>
      </SharedWrapper>
    </Provider>
  );
}
