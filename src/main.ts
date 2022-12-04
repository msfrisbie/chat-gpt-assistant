import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./views/App";

ReactDOM.createRoot(document.getElementById("app")!).render(
  React.createElement(App)
);
