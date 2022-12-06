import { ISettings } from "~interfaces/settings";
import { ChatGptSettingsKey, CHAT_GPT_SETTINGS_KEY } from "../consts";

export const defaultSettings: ISettings = {
  [ChatGptSettingsKey.ENABLE_CONTENT_SCRIPT]: true,
  [ChatGptSettingsKey.EAGER_SEARCH]: false,
  [ChatGptSettingsKey.IFRAME_POPUP]: false,
};

export async function updateSetting(key: ChatGptSettingsKey, value: any) {
  const settings = await getAllSettings();
  settings[key] = value;
  return chrome.storage.local.set(settings);
}

export async function updateAllSettings(settings: ISettings) {
  return chrome.storage.local.set({ [CHAT_GPT_SETTINGS_KEY]: settings });
}

export async function getAllSettings(): Promise<ISettings> {
  return chrome.storage.local.get(CHAT_GPT_SETTINGS_KEY).then((result) => {
    if (result[CHAT_GPT_SETTINGS_KEY]) {
      return {
        ...defaultSettings,
        ...result[CHAT_GPT_SETTINGS_KEY],
      };
    } else {
      return defaultSettings;
    }
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
