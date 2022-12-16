const GPT_SETTINGS_ID = "gpt-settings";
const GPT_SEARCH_ID = "gpt-search";

export function initializeContextMenus() {
  try {
    chrome.contextMenus.create({
      id: GPT_SEARCH_ID,
      title: "Use selected text as ChatGPT prompt",
      contexts: ["selection"],
    });
  } catch (e) {
    console.log(e);
  }

  try {
    chrome.contextMenus.create({
      id: GPT_SETTINGS_ID,
      title: "ChatGPT Assistant settings",
      contexts: [
        "audio",
        "editable",
        "frame",
        "image",
        "link",
        "page",
        "video",
      ],
    });
  } catch (e) {
    console.log(e);
  }
}

export async function handleContextMenuOnClicked(
  info: chrome.contextMenus.OnClickData,
  tab: chrome.tabs.Tab | undefined
) {
  if (info.menuItemId === GPT_SETTINGS_ID) {
    // @ts-ignore
    const url = chrome.runtime.getManifest().options_ui.page;

    chrome.tabs.create({
      url: chrome.runtime.getURL(`${url}#/settings`),
    });
  }

  if (info.menuItemId === GPT_SEARCH_ID) {
    info.selectionText;

    // @ts-ignore
    const url = chrome.runtime.getManifest().options_ui.page;

    chrome.tabs.create({
      url: chrome.runtime.getURL(`${url}?q=${info.selectionText}`),
    });
  }
}
