import React, { useEffect, useState } from "react";
import { ChatGptMessageType, ChatGptSettingsKey } from "../consts";
import { getAllSettings } from "../utils/settings";

chrome.runtime.sendMessage({
  type: ChatGptMessageType.TRACK_EVENT,
  data: {
    eventName: "Opened popup",
  },
});

export default function Popup() {
  const [useIframe, setUseIframe] = useState(false);

  useEffect(() => {
    getAllSettings().then((settings) => {
      setUseIframe(settings[ChatGptSettingsKey.IFRAME_POPUP]);
    });
  }, []);

  return (
    <>
      {/* {useIframe && ( */}
      <iframe
        className="tw-w-screen tw-h-screen"
        src="https://chat.openai.com/chat"
      ></iframe>
      {/* )}
        {!useIframe && (
          <div className="tw-w-full tw-grow tw-bg-neutral-900 tw-flex tw-flex-col tw-items-stretch">
            <Search></Search>;
          </div>
        )} */}
    </>
  );
}
