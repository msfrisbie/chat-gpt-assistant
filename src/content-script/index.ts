import cssText from "bundle-text:../styles/content-script.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import ContentScript from "../components/ContentScript";

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

const query: string = new URL(window.location.href).searchParams.get("q") || "";

if (query) {
  ReactDOM.createRoot(container).render(
    React.createElement(ContentScript, {
      query,
    })
  );
}
