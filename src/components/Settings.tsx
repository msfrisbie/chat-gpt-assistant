import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import {
  ChatGptMessageType,
  ChatGptSettingsKey,
  EMAIL_LENGTH_OPTIONS,
  EMAIL_STYLE_OPTIONS,
  EMAIL_TONE_OPTIONS,
  EMAIL_URGENCY_OPTIONS,
  ResponseBehaviorType,
} from "../consts";
import { ISettings } from "../interfaces/settings";
import {
  defaultSettings,
  getAllSettings,
  updateAllSettings,
} from "../utils/settings";

export default function Settings() {
  const [localSettings, setLocalSettings] = useState(defaultSettings);

  useEffect(() => {
    getAllSettings().then((result) => {
      setLocalSettings(result);
    });
  }, []);

  useEffect(() => {
    updateAllSettings(localSettings);
  }, [localSettings]);

  const updateSettingsKey = async (key: ChatGptSettingsKey, value: any) => {
    const newSettings: ISettings = {
      ...localSettings,
      ...{
        [key]: value,
      },
    };

    setLocalSettings(newSettings);
  };

  const responseBehaviorTypeOptions = [
    ResponseBehaviorType.DEFAULT,
    ResponseBehaviorType.STUB_ANSWER,
    ResponseBehaviorType.STUB_ERROR,
    ResponseBehaviorType.STUB_UNAUTHORIZED,
  ];

  const debugFormControls = (
    <>
      <Form.Label>Override prompt response behavior</Form.Label>
      <Form.Select
        value={localSettings[ChatGptSettingsKey.RESPONSE_BEHAVIOR_TYPE]}
        onChange={(e) =>
          updateSettingsKey(
            ChatGptSettingsKey.RESPONSE_BEHAVIOR_TYPE,
            e.target.value
          )
        }
      >
        {responseBehaviorTypeOptions.map((x) => (
          <option key={x}>{x}</option>
        ))}
      </Form.Select>
    </>
  );

  const emailFormControls = (
    <>
      <div className="tw-grid tw-grid-cols-2 gap-4">
        <div>
          <Form.Label className="tw-text-sm">Default email length:</Form.Label>

          <Form.Select
            size="sm"
            value={localSettings[ChatGptSettingsKey.EMAIL_LENGTH]}
            onChange={(e) =>
              updateSettingsKey(ChatGptSettingsKey.EMAIL_LENGTH, e.target.value)
            }
          >
            {EMAIL_LENGTH_OPTIONS.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </Form.Select>
        </div>
        <div>
          <Form.Label className="tw-text-sm">Default email style:</Form.Label>

          <Form.Select
            size="sm"
            value={localSettings[ChatGptSettingsKey.EMAIL_STYLE]}
            onChange={(e) =>
              updateSettingsKey(ChatGptSettingsKey.EMAIL_STYLE, e.target.value)
            }
          >
            {EMAIL_STYLE_OPTIONS.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </Form.Select>
        </div>
        <div>
          <Form.Label className="tw-text-sm">Default urgency:</Form.Label>

          <Form.Select
            size="sm"
            value={localSettings[ChatGptSettingsKey.EMAIL_URGENCY]}
            onChange={(e) =>
              updateSettingsKey(
                ChatGptSettingsKey.EMAIL_URGENCY,
                e.target.value
              )
            }
          >
            {EMAIL_URGENCY_OPTIONS.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </Form.Select>
        </div>
        <div>
          <Form.Label className="tw-text-sm">Default email tone:</Form.Label>

          <Form.Select
            size="sm"
            value={localSettings[ChatGptSettingsKey.EMAIL_TONE]}
            onChange={(e) =>
              updateSettingsKey(ChatGptSettingsKey.EMAIL_TONE, e.target.value)
            }
          >
            {EMAIL_TONE_OPTIONS.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </Form.Select>
        </div>
      </div>
    </>
  );

  return (
    <div className="tw-p-8 tw-flex tw-flex-col tw-items-stretch tw-gap-8">
      <div className="tw-text-gray-500 tw-text-xs">
        <span className="tw-font-bold">Tip:</span> to get back here, right click
        on any page and select "ChatGPT Assistant Settings"
      </div>

      <Form className="tw-flex tw-flex-col tw-gap-2">
        <div className="tw-opacity-75 tw-text-xl tw-text-sky-400">General</div>

        <Form.Check
          type="switch"
          label="Automatically refresh my ChatGPT session"
          checked={localSettings[ChatGptSettingsKey.AUTO_REFRESH_SESSION]}
          onChange={(e) =>
            updateSettingsKey(
              ChatGptSettingsKey.AUTO_REFRESH_SESSION,
              e.target.checked
            )
          }
        />
        <Form.Check
          type="switch"
          label="Always keep a ChatGPT tab pinned"
          checked={localSettings[ChatGptSettingsKey.KEEP_CHATGPT_PINNED]}
          onChange={(e) => {
            updateSettingsKey(
              ChatGptSettingsKey.KEEP_CHATGPT_PINNED,
              e.target.checked
            );

            if (e.target.checked) {
              chrome.runtime.sendMessage({
                type: ChatGptMessageType.PIN_CHATGPT_TAB,
              });
            }
          }}
        />

        <hr></hr>

        <div className="tw-opacity-75 tw-text-xl tw-text-sky-400">Search</div>

        <Form.Check
          type="switch"
          label="Enable ChatGPT Assistant for Search"
          checked={localSettings[ChatGptSettingsKey.ENABLE_CONTENT_SCRIPT]}
          onChange={(e) =>
            updateSettingsKey(
              ChatGptSettingsKey.ENABLE_CONTENT_SCRIPT,
              e.target.checked
            )
          }
        />
        <Form.Check
          type="switch"
          label="Automatically send prompt when using search engines"
          checked={localSettings[ChatGptSettingsKey.EAGER_SEARCH]}
          onChange={(e) =>
            updateSettingsKey(ChatGptSettingsKey.EAGER_SEARCH, e.target.checked)
          }
        />
        <Form.Check
          type="switch"
          label="Ask ChatGPT to keep search engine responses short"
          checked={localSettings[ChatGptSettingsKey.SHORT_SEARCH_RESPONSES]}
          onChange={(e) =>
            updateSettingsKey(
              ChatGptSettingsKey.SHORT_SEARCH_RESPONSES,
              e.target.checked
            )
          }
        />
        {/* <Form.Check
          type="switch"
          label="Show OpenAI chat interface in popup"
          checked={localSettings[ChatGptSettingsKey.IFRAME_POPUP]}
          onChange={(e) =>
            updateSettingsKey(ChatGptSettingsKey.IFRAME_POPUP, e.target.checked)
          }
        /> */}

        <hr></hr>

        <div className="tw-opacity-75 tw-text-xl tw-text-sky-400">
          Email (beta)
        </div>

        <div className="tw-text-sm tw-text-gray-300">
          Only available for GMail
        </div>

        <Form.Check
          type="switch"
          label="Enable ChatGPT for Email"
          checked={localSettings[ChatGptSettingsKey.ENABLE_EMAIL]}
          onChange={(e) =>
            updateSettingsKey(ChatGptSettingsKey.ENABLE_EMAIL, e.target.checked)
          }
        />

        {localSettings[ChatGptSettingsKey.ENABLE_EMAIL] && emailFormControls}

        <hr></hr>

        <div className="tw-opacity-75 tw-text-xl tw-text-sky-400">Debug</div>

        <Form.Check
          type="switch"
          label="Enable debug mode"
          checked={localSettings[ChatGptSettingsKey.DEBUG]}
          onChange={(e) =>
            updateSettingsKey(ChatGptSettingsKey.DEBUG, e.target.checked)
          }
        />
        {localSettings[ChatGptSettingsKey.DEBUG] && debugFormControls}
      </Form>
    </div>
  );
}
