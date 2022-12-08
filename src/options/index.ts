import React from "react";
import ReactDOM from "react-dom/client";
import Options from "../components/Options";

const script = document.createElement("script");
script.async = true;
script.src = "../static/scripts/ga.js";

document.body.appendChild(script);

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

const GA_ID = "G-62P3FH3XKV";

gtag("js", new Date());
gtag("config", GA_ID, {
  send_page_view: false,
});
gtag("event", "page_view", {
  page_path: window.location.hash,
});

gtag("send", "pageview", "Options Page");

ReactDOM.createRoot(document.getElementById("app")!).render(
  React.createElement(Options)
);
