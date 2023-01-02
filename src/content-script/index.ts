import cssText from "bundle-text:../styles/content-script.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import EmailContentScriptApp from "../components/EmailContentScriptApp";
import OpenAIContentScriptApp from "../components/OpenAIContentScriptApp";
import SearchContentScriptApp from "../components/SearchContentScriptApp";

console.log("ChatGPT Assistant content script loaded");

function init() {
  const originPlusPath = window.location.hostname + window.location.pathname;

  const shadowHost = document.createElement("div");
  shadowHost.setAttribute("id", "chatgpt-shadow-host");
  shadowHost.attachShadow({ mode: "open" });

  const container = document.createElement("div");
  container.setAttribute("id", "chatgpt-container");
  shadowHost.shadowRoot?.appendChild(container);

  let style = document.createElement("style");
  style.textContent = cssText;
  shadowHost.shadowRoot?.appendChild(style);

  if (originPlusPath === "chat.openai.com/chat") {
    const form = document.querySelector("form");
    if (!form) {
      console.error("Cannot find mounting node, exiting");
      return;
    }

    form.parentNode?.insertBefore(shadowHost, form.nextSibling);

    ReactDOM.createRoot(container).render(
      React.createElement(OpenAIContentScriptApp)
    );
  } else if (originPlusPath.includes("mail.google.com/mail")) {
    document.body.appendChild(shadowHost);

    shadowHost.setAttribute(
      "style",
      "position:fixed; right: 3rem; bottom: 1rem; z-index: 1000000;"
    );
    container.style.width = "400px";

    ReactDOM.createRoot(container).render(
      React.createElement(EmailContentScriptApp)
    );
  } else {
    document.body.appendChild(shadowHost);

    shadowHost.setAttribute(
      "style",
      "position:fixed; right: 1rem; bottom: 1rem; z-index: 1000000;"
    );
    container.style.width = "400px";

    ReactDOM.createRoot(container).render(
      React.createElement(SearchContentScriptApp)
    );
  }
}
try {
  init();
} catch (e) {
  console.error("Content script encountered an error", e);
}
