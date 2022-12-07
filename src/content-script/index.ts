import cssText from "bundle-text:../styles/content-script.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import ContentScriptApp from "../components/ContentScriptApp";

console.log("ChatGPT Assistant content script loaded");

const shadowHost = document.createElement("div");
shadowHost.setAttribute(
  "style",
  "position:fixed; right: 2rem; bottom: 2rem; z-index: 1000000;"
);
shadowHost.attachShadow({ mode: "open" });

const container = document.createElement("div");
container.setAttribute("id", "chat-gpt-container");
container.style.width = "400px";
shadowHost.shadowRoot?.appendChild(container);

let style = document.createElement("style");
style.textContent = cssText;
shadowHost.shadowRoot?.appendChild(style);

document.body.appendChild(shadowHost);

ReactDOM.createRoot(container).render(React.createElement(ContentScriptApp));

window.addEventListener("contextmenu", console.log);
