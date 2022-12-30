import { trackEvent } from "./analytics";

export async function openSettings() {
  trackEvent("Open settings");

  // @ts-ignore
  const url = chrome.runtime.getManifest().options_ui.page;

  chrome.tabs.create({
    url: chrome.runtime.getURL(`${url}#/settings`),
  });
}
