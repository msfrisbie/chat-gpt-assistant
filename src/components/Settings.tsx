import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { ChatGptSettingsKey, ResponseBehaviorType } from "../consts";
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

  const options = [
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
        {options.map((x) => (
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

          <Form.Select size="sm">
            <option>Brief</option>
            <option>Standard</option>
            <option>Thorough</option>
          </Form.Select>
        </div>
        <div>
          <Form.Label className="tw-text-sm">Default email style:</Form.Label>

          <Form.Select size="sm">
            <option>Formal</option>
            <option>Standard</option>
            <option>Casual</option>
          </Form.Select>
        </div>
        <div>
          <Form.Label className="tw-text-sm">Default urgency:</Form.Label>

          <Form.Select size="sm">
            <option>Urgent</option>
            <option>Standard</option>
            <option>Non-urgent</option>
          </Form.Select>
        </div>
        <div>
          <Form.Label className="tw-text-sm">Default email tone:</Form.Label>

          <Form.Select size="sm">
            <option>Appreciative</option>
            <option>Assertive</option>
            <option>Cheerful</option>
            <option>Critical</option>
            <option>Dry</option>
            <option>Friendly</option>
            <option>Humorous</option>
            <option>Inspirational</option>
            <option>Lighthearted</option>
            <option>Negative</option>
            <option>Persuasive</option>
            <option>Polite</option>
            <option>Positive</option>
            <option>Professional</option>
            <option>Serious</option>
            <option>Thankful</option>
          </Form.Select>
        </div>
      </div>
    </>
  );

  return (
    <div className="tw-p-8 tw-flex tw-flex-col tw-items-stretch tw-gap-8">
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

        <hr></hr>

        <div className="tw-opacity-75 tw-text-xl tw-text-sky-400">
          Search Engines
        </div>

        <Form.Check
          type="switch"
          label="Show ChatGPT Assistant when using search engines"
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
          Email Tool (beta)
        </div>

        <div className="tw-text-sm tw-text-gray-300">
          Only available for GMail
        </div>

        <Form.Check
          type="switch"
          label="Enable email tool"
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
