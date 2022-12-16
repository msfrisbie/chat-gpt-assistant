import {
  ChatGptSettingsKey,
  CHAT_GPT_SETTINGS_KEY,
  ResponseBehaviorType,
} from "../consts";
import { ISettings } from "../interfaces/settings";
import { get, set } from "./storage";

export const defaultSettings: ISettings = {
  [ChatGptSettingsKey.ENABLE_CONTENT_SCRIPT]: true,
  [ChatGptSettingsKey.EAGER_SEARCH]: true,
  [ChatGptSettingsKey.IFRAME_POPUP]: false,
  [ChatGptSettingsKey.DEBUG]: false,
  [ChatGptSettingsKey.RESPONSE_BEHAVIOR_TYPE]: ResponseBehaviorType.DEFAULT,
};

export async function updateSetting(key: ChatGptSettingsKey, value: any) {
  const settings = await getAllSettings();
  settings[key] = value;
  return set(CHAT_GPT_SETTINGS_KEY, settings);
}

export async function updateAllSettings(settings: ISettings) {
  return set(CHAT_GPT_SETTINGS_KEY, settings);
}

export async function getAllSettings(): Promise<ISettings> {
  return get(CHAT_GPT_SETTINGS_KEY).then((settings) => {
    if (settings) {
      return {
        ...defaultSettings,
        ...settings,
      };
    } else {
      return defaultSettings;
    }
  });
}

export async function getSetting(key: ChatGptSettingsKey) {
  return get(CHAT_GPT_SETTINGS_KEY).then((settings) => {
    if (!settings) {
      return null;
    } else {
      return settings[key];
    }
  });
}
