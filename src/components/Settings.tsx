import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { CHAT_GPT_SETTINGS_KEY } from "../consts";

export default function Settings() {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    chrome.storage.local.get(CHAT_GPT_SETTINGS_KEY).then((result) => {
      if (result[CHAT_GPT_SETTINGS_KEY]) {
      }
    });
  });

  const updateSettings = (key: string, value: any) => {};

  return (
    <div className="tw-text-white tw-p-8 tw-flex tw-flex-col tw-items-stretch tw-gap-8">
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Check this switch"
          onChange={(e) => updateSettings("key", e.target.value)}
        />
      </Form>
    </div>
  );
}
