import React from "react";
import ReactDOM from "react-dom/client";
import Popup from "../components/Popup";
import { initializeGoogleAnalytics } from "../utils/analytics";

const gtag = initializeGoogleAnalytics();

gtag("event", "page_view", {
  page_path: window.location.hash,
});

gtag("send", "pageview", "Popup Page");

ReactDOM.createRoot(document.getElementById("app")!).render(
  React.createElement(Popup)
);
