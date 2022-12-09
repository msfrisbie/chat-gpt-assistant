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
      console.log({ result });
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

  return (
    <div className="tw-text-white tw-p-8 tw-flex tw-flex-col tw-items-stretch tw-gap-8">
      <Form>
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
        <Form.Check
          type="switch"
          label="Show OpenAI chat interface in popup"
          checked={localSettings[ChatGptSettingsKey.IFRAME_POPUP]}
          onChange={(e) =>
            updateSettingsKey(ChatGptSettingsKey.IFRAME_POPUP, e.target.checked)
          }
        />
        <hr></hr>
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
