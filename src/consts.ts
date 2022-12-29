export const GA_ID = "G-62P3FH3XKV";

export const CHAT_GPT_HISTORY_KEY = "CHAT_GPT_HISTORY";
export const CHAT_GPT_SETTINGS_KEY = "CHAT_GPT_SETTINGS_KEY";
export enum ChatGptSettingsKey {
  ENABLE_CONTENT_SCRIPT = "ENABLE_CONTENT_SCRIPT",
  EAGER_SEARCH = "EAGER_SEARCH",
  IFRAME_POPUP = "IFRAME_POPUP",
  DEBUG = "DEBUG",
  RESPONSE_BEHAVIOR_TYPE = "RESPONSE_BEHAVIOR_TYPE",
}

export enum ChatGptThreadState {
  INITIAL,
  UNAUTHORIZED,
  LOADING,
  SUCCESS_INFLIGHT,
  SUCCESS_COMPLETE,
  ERROR,
}

export enum ChatGptMessageType {
  SEND_PROMPT_FROM_CS = "SEND_PROMPT_FROM_CS",
  ANSWER_TEXT_FROM_BG = "ANSWER_FROM_BG",
  ANSWER_DONE_FROM_BG = "ANSWER_DONE_FROM_BG",
  ANSWER_ERROR_FROM_BG = "ANSWER_ERROR_FROM_BG",
  BURN_PROMPT = "BURN_PROMPT",
  GET_PROMPT = "GET_PROMPT",
}

export enum ResponseBehaviorType {
  DEFAULT = "DEFAULT",
  STUB_ANSWER = "STUB_ANSWER",
  STUB_ERROR = "STUB_ERROR",
  STUB_UNAUTHORIZED = "STUB_UNAUTHORIZED",
}

export const KEY_ACCESS_TOKEN = "accessToken";

export const STUB_RESPONSE = `
This is a stub response! This is a stub response! 
This is a stub response! This is a stub response! 

\`\`\`
// Here is some code:
function foobar() {
    return "baz";
}
\`\`\`

This is a stub response! This is a stub response! 
This is a stub response! This is a stub response! 
`;
