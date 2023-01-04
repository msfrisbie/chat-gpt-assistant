import cssText from "bundle-text:../styles/content-script.scss";
import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom/client";
import EmailContentScriptApp from "../components/EmailContentScriptApp";
import OpenAIContentScriptApp from "../components/OpenAIContentScriptApp";
import SearchContentScriptApp from "../components/SearchContentScriptApp";

console.log("ChatGPT Assistant content script loaded");

function shadowHostFactory(): {
  shadowHost: HTMLElement;
  container: HTMLElement;
} {
  const shadowHost: HTMLElement = document.createElement("div");
  shadowHost.setAttribute("id", "chatgpt-shadow-host");
  shadowHost.attachShadow({ mode: "open" });

  const container = document.createElement("div");
  container.setAttribute("id", "chatgpt-container");
  shadowHost.shadowRoot?.appendChild(container);

  let style = document.createElement("style");
  style.textContent = cssText;
  shadowHost.shadowRoot?.appendChild(style);

  return { shadowHost, container };
}

function init() {
  const originPlusPath = window.location.hostname + window.location.pathname;

  if (originPlusPath === "chat.openai.com/chat") {
    // ChatGPT
    const form = document.querySelector("form");
    if (!form) {
      console.error("Cannot find mounting node, exiting");
      return;
    }

    const { shadowHost, container } = shadowHostFactory();

    form.parentNode?.insertBefore(shadowHost, form.nextSibling);

    ReactDOM.createRoot(container).render(
      React.createElement(OpenAIContentScriptApp)
    );
  } else if (originPlusPath.includes("mail.google.com/mail")) {
    // GMail
    const debouncedHandler = _.debounce(
      () => {
        const editables = [...document.querySelectorAll(".editable")];

        for (const editable of editables) {
          if (editable.hasAttribute("chatgpt")) {
            continue;
          }

          const { shadowHost, container } = shadowHostFactory();

          let e = editable;

          for (let i = 0; i < 10; ++i) {
            if (e.nodeName === "TD") {
              break;
            }

            e = e.parentElement as HTMLElement;
          }

          e.insertBefore(shadowHost, e.firstChild);
          editable.setAttribute("chatgpt", "true");

          // document.body.appendChild(shadowHost);

          // shadowHost.setAttribute(
          //   "style",
          //   "position:fixed; right: 3rem; bottom: 1rem; z-index: 1000000;"
          // );

          ReactDOM.createRoot(container).render(
            React.createElement(EmailContentScriptApp)
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
    const { shadowHost, container } = shadowHostFactory();

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
