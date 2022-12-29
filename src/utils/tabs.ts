export async function openSettings() {
  // @ts-ignore
  const url = chrome.runtime.getManifest().options_ui.page;

  chrome.tabs.create({
    url: chrome.runtime.getURL(`${url}#/settings`),
  });
}
