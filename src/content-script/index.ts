import cssText from "bundle-text:../styles/google-card.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import GoogleCard from "../components/GoogleCard";

const shadowHost = document.createElement("div");
shadowHost.setAttribute(
  "style",
  "position:absolute; right: 2rem; z-index: 1000000"
);
shadowHost.attachShadow({ mode: "open" });

const container = document.createElement("div");
container.setAttribute("id", "chat-gpt-container");
shadowHost.shadowRoot?.appendChild(container);

let style = document.createElement("style");
style.textContent = cssText;
shadowHost.shadowRoot?.appendChild(style);

document.body.appendChild(shadowHost);

const gbcr = document.querySelector("#search")?.getBoundingClientRect();
const yOffset = gbcr.top + window.scrollY;
const xOffset = gbcr.right + window.scrollX + 24;

shadowHost.style.top = `${yOffset}px`;
shadowHost.style.left = `${xOffset}px`;

// const siderbarContainer = document.querySelector("#rhs");
// if (siderbarContainer) {
//   siderbarContainer.prepend(shadowHost);
// } else {
//   container.classList.add("ml-8");
//   document.querySelector("#rcnt")?.appendChild(shadowHost);
// }

const query: string = new URL(window.location.href).searchParams.get("q") || "";

if (query) {
  ReactDOM.createRoot(container).render(
    React.createElement(GoogleCard, {
      query,
    })
  );
}
