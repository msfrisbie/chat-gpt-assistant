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