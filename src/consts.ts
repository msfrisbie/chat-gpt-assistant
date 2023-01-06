export const GA_ID = "G-62P3FH3XKV";
export const AMPLITUDE_API_KEY = "714b112a57c633f7488b2910efcb103f";

export const CHAT_GPT_HISTORY_KEY = "CHAT_GPT_HISTORY";
export const CHAT_GPT_SETTINGS_KEY = "CHAT_GPT_SETTINGS_KEY";
export enum ChatGptSettingsKey {
  ENABLE_CONTENT_SCRIPT = "ENABLE_CONTENT_SCRIPT",
  EAGER_SEARCH = "EAGER_SEARCH",
  SHORT_SEARCH_RESPONSES = "SHORT_SEARCH_RESPONSES",
  IFRAME_POPUP = "IFRAME_POPUP",
  DEBUG = "DEBUG",
  RESPONSE_BEHAVIOR_TYPE = "RESPONSE_BEHAVIOR_TYPE",
  AUTO_REFRESH_SESSION = "AUTO_REFRESH_SESSION",
  KEEP_CHATGPT_PINNED = "KEEP_CHATGPT_PINNED",
  ENABLE_EMAIL = "ENABLE_EMAIL",
  EMAIL_LENGTH = "EMAIL_LENGTH",
  EMAIL_STYLE = "EMAIL_STYLE",
  EMAIL_URGENCY = "EMAIL_URGENCY",
  EMAIL_TONE = "EMAIL_TONE",
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
  OPEN_SETTINGS = "OPEN_SETTINGS",
  TRACK_EVENT = "TRACK_EVENT",
  PIN_CHATGPT_TAB = "PIN_CHATGPT_TAB",
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

export const EMAIL_LENGTH_OPTIONS = ["Brief", "Thorough"];
export const EMAIL_STYLE_OPTIONS = ["Formal", "Casual"];
export const EMAIL_URGENCY_OPTIONS = ["Urgent", "Non-urgent"];
export const EMAIL_TONE_OPTIONS = [
  "Appreciative",
  "Assertive",
  "Cheerful",
  "Critical",
  "Dry",
  "Friendly",
  "Humorous",
  "Inspirational",
  "Lighthearted",
  "Negative",
  "Persuasive",
  "Polite",
  "Positive",
  "Professional",
  "Serious",
  "Thankful",
];

export const QUICK_SUMMARIES: string[] = ["It was nice meeting you"];

export const QUICK_REPLY_SUMMARIES: string[] = [
  "Acknowledge the email and say thank you",
  "I'll look into it",
  "I don't understand, can you clarify?",
];
