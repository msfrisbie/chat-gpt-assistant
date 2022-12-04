const container = document.createElement("div");
container.className = "chat-gpt-container";

const siderbarContainer = document.getElementById("rhs");
if (siderbarContainer) {
  siderbarContainer.prepend(container);
} else {
  container.classList.add("sidebar-free");
  document.getElementById("rcnt")?.appendChild(container);
}

import React from "react";
import ReactDOM from "react-dom/client";
import GoogleCard from "../components/GoogleCard";

ReactDOM.createRoot(container).render(React.createElement(GoogleCard));
