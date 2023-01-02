import React from "react";
import ReactDOM from "react-dom/client";
import OptionsApp from "../components/OptionsApp";
import { initializeGoogleAnalytics } from "../utils/analytics";

const gtag = initializeGoogleAnalytics();

gtag("event", "page_view", {
  page_path: window.location.hash,
});

gtag("send", "pageview", "Options Page");

ReactDOM.createRoot(document.getElementById("app")!).render(
  React.createElement(OptionsApp)
);
