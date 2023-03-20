import { trackEvent } from "./analytics";

export async function openSettings() {
  trackEvent("Open settings");

  // @ts-ignore
  const url = chrome.runtime.getManifest().options_ui.page;

  chrome.tabs.create({
    url: chrome.runtime.getURL(`${url}#/settings`),
  });
}

export async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

export async function maybeOpenAndCloseChatGptTab() {
  chrome.tabs.create(
    {
      active: false,
      url: "https://chat.openai.com/chat",
    },
    (tab) => {
      setTimeout(() => {
        tab.id && chrome.tabs.remove(tab.id);
      }, 10000);
    }
  );
}

export async function maybePinChatGptTab() {
  // Select pinned ChatGPT tab in the current window
  let queryOptions = {
    url: "https://chat.openai.com/chat/*",
    pinned: true,
    lastFocusedWindow: true,
  };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let tabs = await chrome.tabs.query(queryOptions);

  if (tabs.length === 0) {
    chrome.tabs.create({
      url: "https://chat.openai.com/chat",
      pinned: true,
      active: false,
    });
  } else {
    chrome.tabs.reload(tabs[0].id as number);
  }
}

export async function countSearchEngineTabs() {
  const tabs = await chrome.tabs.query({});

  const searchEngineTabs = tabs.filter((tab) => {
    if (!tab.url) {
      return false;
    }

    return new URL(tab.url).hostname.includes("google.com");
  });

  chrome.storage.local.set({
    SEARCH_ENGINE_TAB_COUNT: searchEngineTabs.length,
  });
}
