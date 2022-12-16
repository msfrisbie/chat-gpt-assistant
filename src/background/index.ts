import {
  handleContextMenuOnClicked,
  initializeContextMenus,
} from "../utils/contextmenus";
import { backgroundHandleConnect } from "../utils/messaging";
import { handleOmniboxOnInputChanged } from "../utils/omnibox";

console.log("Initialized background", Date.now());

chrome.runtime.onConnect.addListener(backgroundHandleConnect);

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    // @ts-ignore
    const url = chrome.runtime.getManifest().options_ui.page;

    chrome.tabs.create({
      url: chrome.runtime.getURL(`${url}#/how-to-use`),
    });
  }

  initializeContextMenus();
});

chrome.omnibox.onInputEntered.addListener((text: string) => {
  // @ts-ignore
  const url = chrome.runtime.getManifest().options_ui.page;

  chrome.tabs.create({
    url: chrome.runtime.getURL(`${url}?q=${text}`),
  });
});

chrome.omnibox.onInputChanged.addListener(handleOmniboxOnInputChanged);

chrome.contextMenus.onClicked.addListener(handleContextMenuOnClicked);
