import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import Popup from "./Popup";
import SharedWrapper from "./SharedWrapper";

export default function OptionsApp() {
  return (
    <Provider store={store}>
      <SharedWrapper>
        <Popup></Popup>
      </SharedWrapper>
    </Provider>
  );
}
