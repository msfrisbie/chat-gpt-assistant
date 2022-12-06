import { ChatGptSettingsKey, CHAT_GPT_SETTINGS_KEY } from "../consts";

export async function updateSetting(key: ChatGptSettingsKey, value: any) {
  const settings = await getAllSettings();
  settings[key] = value;
  return chrome.storage.local.set(settings);
}

export async function getAllSettings() {
  return chrome.storage.local.get(CHAT_GPT_SETTINGS_KEY).then((result) => {
    return result[CHAT_GPT_SETTINGS_KEY] || {};
  });
}

export async function getSetting(key: ChatGptSettingsKey) {
  return chrome.storage.local.get(CHAT_GPT_SETTINGS_KEY).then((result) => {
    if (!result[CHAT_GPT_SETTINGS_KEY]) {
      return null;
    } else {
      return result[CHAT_GPT_SETTINGS_KEY][key];
    }
  });
}
