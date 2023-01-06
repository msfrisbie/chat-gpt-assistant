import "bootstrap/dist/js/bootstrap.bundle.min";
import cssText from "bundle-text:../styles/content-script.scss";
import $ from "jquery";
import _ from "lodash";
import Popper from "popper.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { v4 as uuidv4 } from "uuid";
import EmailContentScriptApp from "../components/EmailContentScriptApp";
import OpenAIContentScriptApp from "../components/OpenAIContentScriptApp";
import SearchContentScriptApp from "../components/SearchContentScriptApp";

[Popper, $];

console.log("ChatGPT Assistant content script loaded");

function shadowHostFactory(widgetId: string): {
  shadowHost: HTMLElement;
  container: HTMLElement;
} {
  const shadowHost: HTMLElement = document.createElement("div");
  shadowHost.setAttribute("id", `chatgpt-shadow-host-${widgetId}`);
  shadowHost.attachShadow({ mode: "open" });

  const container = document.createElement("div");
  container.setAttribute("id", `chatgpt-container-${widgetId}`);
  shadowHost.shadowRoot?.appendChild(container);

  let style = document.createElement("style");
  style.textContent = cssText;
  shadowHost.shadowRoot?.appendChild(style);

  return { shadowHost, container };
}

function init() {
  const widgetId = uuidv4();

  const originPlusPath = window.location.hostname + window.location.pathname;

  if (originPlusPath === "chat.openai.com/chat") {
    // ChatGPT
    const form = document.querySelector("form");
    if (!form) {
      console.error("Cannot find mounting node, exiting");
      return;
    }

    const { shadowHost, container } = shadowHostFactory(widgetId);

    form.parentNode?.insertBefore(shadowHost, form.nextSibling);

    ReactDOM.createRoot(container).render(
      React.createElement(OpenAIContentScriptApp)
    );
  } else if (originPlusPath.includes("mail.google.com/mail")) {
    // GMail
    const debouncedHandler = _.debounce(
      () => {
        // The editable field seems to correspond 1:1 to email inputs
        const editables = [...document.querySelectorAll(".editable")];

        for (const editable of editables) {
          if (editable.hasAttribute("chatgpt-touched")) {
            continue;
          }

          const { shadowHost, container } = shadowHostFactory(widgetId);

          let e = editable;

          e.setAttribute("chatgpt-touched", widgetId);
          e.setAttribute("chatgpt-editable", widgetId);

          let tableCount = 0;

          let host = null;

          // GMail has three nested tables outside the .editable
          // Table 1 is to format the contenteditable section
          // Table 2 wraps the markdown and is the insertion point
          // Table 3 wraps the entire email form and is the widget context
          for (let i = 0; i < 30; ++i) {
            if (e.nodeName === "TABLE") {
              tableCount++;

              if (tableCount === 2) {
                e.setAttribute("chatgpt-touched", widgetId);
                e.setAttribute("chatgpt-host", widgetId);
                host = e;
              }

              if (tableCount === 3) {
                e.setAttribute("chatgpt-touched", widgetId);
                e.setAttribute("chatgpt-widget-compose-context", widgetId);
              }
            }

            if (e.querySelector("[data-message-id]")) {
              e.setAttribute("chatgpt-touched", widgetId);
              e.setAttribute("chatgpt-widget-parent-context", widgetId);
              break;
            }

            e = e.parentElement as HTMLElement;
          }

          if (!host) {
            throw new Error("Cannot locate host");
          }

          host.insertBefore(shadowHost, host.firstChild);

          ReactDOM.createRoot(container).render(
            React.createElement(EmailContentScriptApp, { widgetId })
          );
        }
      },
      100,
      {
        leading: true,
        maxWait: 300,
        trailing: true,
      }
    );

    const observer = new MutationObserver(() => debouncedHandler());

    observer.observe(document.body, { subtree: true, childList: true });
  } else {
    // Search Engines
    const { shadowHost, container } = shadowHostFactory(widgetId);

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
