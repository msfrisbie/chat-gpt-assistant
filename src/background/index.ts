import ExpiryMap from "expiry-map";
import { ChatGPTAPI } from "../../node_modules/chatgpt/build/browser/index.js";
import {
  ChatGptMessageType,
  ChatGptSettingsKey,
  CHAT_GPT_HISTORY_KEY,
  KEY_ACCESS_TOKEN,
  ResponseBehaviorType,
  STUB_RESPONSE
} from "../consts";
import { IChatGptPostMessage } from "../interfaces/settings";
import { trackEvent } from "../utils/analytics";
import { cache, getAccessToken } from "../utils/chatgpt";
import { sendMessage } from "../utils/messaging";
import { getSetting } from "../utils/settings";
import {
  countSearchEngineTabs,
  maybeOpenAndCloseChatGptTab,
  maybePinChatGptTab,
  openSettings
} from "../utils/tabs";

console.log("Initialized background", Date.now());

const expiryMap = new ExpiryMap(30 * 1000);

chrome.runtime.onConnect.addListener((port) => {
  port.onDisconnect.addListener(() => console.log("Port disconnected"));

  port.onMessage.addListener(async (msg: IChatGptPostMessage) => {
    console.debug("Received question:", msg.data.question.slice(0, 20));

    trackEvent("Search engine prompt submitted");

    const debug: boolean = !!(await getSetting(ChatGptSettingsKey.DEBUG));

    if (debug) {
      console.log("Debug mode enabled");

      const responseBehaviorType = await getSetting(
        ChatGptSettingsKey.RESPONSE_BEHAVIOR_TYPE
      );

      switch (responseBehaviorType) {
        case ResponseBehaviorType.STUB_ANSWER:
          for (let i = 0; i < STUB_RESPONSE.length; ++i) {
            sendMessage(port, ChatGptMessageType.ANSWER_TEXT_FROM_BG, {
              answer: STUB_RESPONSE.slice(0, i),
            });
            await new Promise((resolve) => setTimeout(resolve, 10));
          }
          await sendMessage(port, ChatGptMessageType.ANSWER_DONE_FROM_BG);
          port.disconnect();
          return;
        case ResponseBehaviorType.STUB_ERROR:
          sendMessage(port, ChatGptMessageType.ANSWER_ERROR_FROM_BG, {
            error: "STUB_ERROR",
          });
          return;
        case ResponseBehaviorType.STUB_UNAUTHORIZED:
          sendMessage(port, ChatGptMessageType.ANSWER_ERROR_FROM_BG, {
            error: "UNAUTHORIZED",
          });
          return;
        case ResponseBehaviorType.DEFAULT:
        default:
          break;
      }
    }

    try {
      const tabCount =
        (await chrome.storage.local
          .get("SEARCH_ENGINE_TAB_COUNT")
          .then((result) => result["SEARCH_ENGINE_TAB_COUNT"])) ?? 0;
      // Cap open connections
      if (tabCount > 25) {
        sendMessage(port, ChatGptMessageType.ANSWER_ERROR_FROM_BG, {
          error: "MAX_CONNECTIONS",
        });
        return;
      }
    } catch {}

    let api: ChatGPTAPI;

    try {
      const sessionToken = await getAccessToken();

      api = new ChatGPTAPI({
        sessionToken,
      });

      await api.ensureAuth();
    } catch (e) {
      sendMessage(port, ChatGptMessageType.ANSWER_ERROR_FROM_BG, {
        error: "UNAUTHORIZED",
      });
      return;
    }

    try {
      const conversation = api.getConversation({
        conversationId: msg.data.conversationId,
        parentMessageId: msg.data.parentMessageId,
      });

      await conversation.sendMessage(msg.data.question, {
        onProgress(progressResponse) {
          // console.debug({ progressResponse });
        },
        onConversationResponse(conversationResponse) {
          console.debug({ conversationResponse });
          sendMessage(port, ChatGptMessageType.ANSWER_TEXT_FROM_BG, {
            conversationResponse,
          });
        },
      });
      sendMessage(port, ChatGptMessageType.ANSWER_DONE_FROM_BG);
      port.disconnect();
    } catch (e) {
      console.error(e);
      sendMessage(port, ChatGptMessageType.ANSWER_ERROR_FROM_BG, {
        error: e.message,
      });
      port.disconnect();
      cache.delete(KEY_ACCESS_TOKEN);
    }
  });
});

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    // @ts-ignore
    const url = chrome.runtime.getManifest().options_ui.page;

    chrome.tabs.create({
      url: chrome.runtime.getURL(`${url}#/`),
    });

    trackEvent("New install");
  }

  try {
    chrome.contextMenus.create({
      id: "gpt-search",
      title: "Use selected text as ChatGPT prompt",
      contexts: ["selection"],
    });
  } catch (e) {
    console.log(e);
  }

  try {
    chrome.contextMenus.create({
      id: "gpt-settings",
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
});

chrome.omnibox.onInputEntered.addListener((text: string) => {
  trackEvent("Omnibox prompt submitted");

  chrome.tabs.create(
    {
      url: "https://chat.openai.com/chat",
    },
    (tab) => {
      expiryMap.set(tab?.id, text);
    }
  );
});

chrome.omnibox.onInputChanged.addListener(async (text, suggest) => {
  const normalizedText = text.trim().toLowerCase();

  const history = await chrome.storage.local.get(CHAT_GPT_HISTORY_KEY);

  if (history[CHAT_GPT_HISTORY_KEY]) {
    suggest(
      history[CHAT_GPT_HISTORY_KEY].filter((historyItem: string) =>
        historyItem.trim().toLowerCase().includes(normalizedText)
      ).map((historyItem: string) => {
        let title = historyItem;

        const titleStartIdx = title.toLowerCase().indexOf(normalizedText);
        if (titleStartIdx >= 0) {
          const titleEndIdx = titleStartIdx + normalizedText.length;
          title =
            title.slice(0, titleStartIdx) +
            "<match>" +
            title.slice(titleStartIdx, titleEndIdx) +
            "</match>" +
            title.slice(titleEndIdx);
        }

        return {
          content: historyItem,
          description: `${title}`,
        };
      })
    );
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "gpt-settings") {
    openSettings();
  }

  if (info.menuItemId === "gpt-search") {
    trackEvent("Context menu prompt submitted");
    chrome.tabs.create(
      {
        url: "https://chat.openai.com/chat",
      },
      (tab) => {
        expiryMap.set(tab?.id, info.selectionText);
      }
    );
  }
});

chrome.alarms.create("authCheck", {
  periodInMinutes: 5,
});

chrome.alarms.create("tabCheck", {
  periodInMinutes: 1,
});

chrome.alarms.onAlarm.addListener(async (alarm) => {
  console.log("Alarm " + alarm.name);

  switch (alarm.name) {
    case "authCheck":
      if (!(await getSetting(ChatGptSettingsKey.AUTO_REFRESH_SESSION))) {
        return;
      }

      let api: ChatGPTAPI;

      try {
        const sessionToken = await getAccessToken();

        api = new ChatGPTAPI({
          sessionToken,
        });

        await api.ensureAuth();
      } catch (e) {
        maybeOpenAndCloseChatGptTab();
      }
      break;
    case "tabCheck":
      if (!(await getSetting(ChatGptSettingsKey.KEEP_CHATGPT_PINNED))) {
        return;
      }

      maybePinChatGptTab();

      countSearchEngineTabs();

      break;
    default:
      throw new Error("Bad alarm name:" + alarm.name);
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.type) {
    case ChatGptMessageType.GET_PROMPT:
      sendResponse({
        data: {
          prompt: expiryMap.get(sender.tab?.id),
        },
      });
      break;
    case ChatGptMessageType.OPEN_SETTINGS:
      openSettings();
      break;
    case ChatGptMessageType.BURN_PROMPT:
      expiryMap.delete(sender.tab?.id);
      break;
    case ChatGptMessageType.TRACK_EVENT:
      trackEvent(message.data.eventName, message.data.eventProperties);
      break;
    case ChatGptMessageType.PIN_CHATGPT_TAB:
      maybePinChatGptTab();
      break;
    default:
      console.error(message, JSON.stringify(message));
      throw new Error("Bad message type");
  }
});

chrome.runtime.setUninstallURL(
  "https://docs.google.com/forms/d/e/1FAIpQLSe37ktf8czx15EqEkBaBH4NT6b0K8QzlhC9zTMJFZOHh-k7fQ/viewform?usp=sf_link"
);

countSearchEngineTabs();
