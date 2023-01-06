import {
  ChatGptSettingsKey,
  CHAT_GPT_SETTINGS_KEY,
  ResponseBehaviorType,
} from "../consts";
import { ISettings } from "../interfaces/settings";

export const defaultSettings: ISettings = {
  [ChatGptSettingsKey.ENABLE_CONTENT_SCRIPT]: true,
  [ChatGptSettingsKey.EAGER_SEARCH]: false,
  [ChatGptSettingsKey.SHORT_SEARCH_RESPONSES]: true,
  [ChatGptSettingsKey.IFRAME_POPUP]: false,
  [ChatGptSettingsKey.AUTO_REFRESH_SESSION]: true,
  [ChatGptSettingsKey.KEEP_CHATGPT_PINNED]: false,
  [ChatGptSettingsKey.DEBUG]: false,
  [ChatGptSettingsKey.RESPONSE_BEHAVIOR_TYPE]: ResponseBehaviorType.DEFAULT,
  [ChatGptSettingsKey.ENABLE_EMAIL]: false,
  [ChatGptSettingsKey.EMAIL_LENGTH]: "Brief",
  [ChatGptSettingsKey.EMAIL_STYLE]: "Formal",
  [ChatGptSettingsKey.EMAIL_URGENCY]: "Non-urgent",
  [ChatGptSettingsKey.EMAIL_TONE]: "Friendly",
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
