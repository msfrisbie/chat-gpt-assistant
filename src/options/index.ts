import React from "react";
import ReactDOM from "react-dom/client";
import Options from "../components/Options";
import { initializeGoogleAnalytics } from "../utils/analytics";

const gtag = initializeGoogleAnalytics();

gtag("event", "page_view", {
  page_path: window.location.hash,
});

gtag("send", "pageview", "Options Page");

ReactDOM.createRoot(document.getElementById("app")!).render(
  React.createElement(Options)
);
