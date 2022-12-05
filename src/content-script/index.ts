import React from "react";
import ReactDOM from "react-dom/client";
import GoogleCard from "../components/GoogleCard";

const container = document.createElement("div");
container.setAttribute("id", "chat-gpt-container");
container.classList.add("basis-0", "grow");

const siderbarContainer = document.querySelector("#rhs");
if (siderbarContainer) {
  siderbarContainer.prepend(container);
} else {
  container.classList.add("ml-8");
  document.querySelector("#rcnt")?.appendChild(container);
}

const query: string = new URL(window.location.href).searchParams.get("q") || "";

if (query) {
  ReactDOM.createRoot(container).render(
    React.createElement(GoogleCard, {
      query,
    })
  );
}
