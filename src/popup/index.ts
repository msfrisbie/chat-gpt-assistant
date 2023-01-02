import React from "react";
import ReactDOM from "react-dom/client";
import PopupApp from "../components/PopupApp";
import { initializeGoogleAnalytics } from "../utils/analytics";

const gtag = initializeGoogleAnalytics();

gtag("event", "page_view", {
  page_path: window.location.hash,
});

gtag("send", "pageview", "Popup Page");

ReactDOM.createRoot(document.getElementById("app")!).render(
  React.createElement(PopupApp)
);
