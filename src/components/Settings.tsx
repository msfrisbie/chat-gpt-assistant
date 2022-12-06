import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { ISettings } from "~interfaces/settings";
import { ChatGptSettingsKey } from "../consts";
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

  return (
    <div className="tw-text-white tw-p-8 tw-flex tw-flex-col tw-items-stretch tw-gap-8">
      <Form>
        <Form.Check
          type="switch"
          label="Automatically send prompt when using search engines"
          checked={localSettings[ChatGptSettingsKey.EAGER_SEARCH]}
          onChange={(e) =>
            updateSettingsKey(ChatGptSettingsKey.EAGER_SEARCH, e.target.checked)
          }
        />
      </Form>
    </div>
  );
}
