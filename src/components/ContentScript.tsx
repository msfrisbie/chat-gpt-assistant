import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ChatGptResultState, ChatGptSettingsKey } from "../consts";
import { SearchContext } from "../contexts/Search";
import { getAllSettings } from "../utils/settings";
import ChatGptResult from "./ChatGptResult";

export default function ContentScript() {
  let port: chrome.runtime.Port;
  const urlQuery: string =
    new URL(window.location.href).searchParams.get("q") || "";

  const [showOverlay, setShowOverlay] = useState(false);

  const {
    executeSearch,
    searchSuccess,
    searchUnauthorized,
    searchError,
    chatGptResultState,
  } = useContext(SearchContext);

  useEffect(() => {
    getAllSettings().then((settings) => {
      if (urlQuery && settings[ChatGptSettingsKey.EAGER_SEARCH]) {
        search(urlQuery);
      }
      setShowOverlay(settings[ChatGptSettingsKey.ENABLE_CONTENT_SCRIPT]);
    });

    port = chrome.runtime.connect();
    port.onMessage.addListener((msg: any) => {
      if (msg.answer) {
        searchSuccess(msg.answer);
      } else if (msg.error === "UNAUTHORIZED") {
        searchUnauthorized();
      } else {
        searchError();
      }
    });
  }, []);

  const search = (question: string) => {
    executeSearch(question);
    port.postMessage({ question });
  };

  const submit = () => {
    search(urlQuery);
  };

  return (
    <>
      {showOverlay && urlQuery && (
        <div
          style={{ maxHeight: "80vh" }}
          className="tw-rounded-xl tw-border tw-border-solid tw-border-gray-700 tw-overflow-y-auto"
        >
          <Card style={{ backgroundColor: "#111111" }} text="white">
            {chatGptResultState === ChatGptResultState.INITIAL && (
              <Card.Body className="tw-border-b tw-border-solid tw-border-gray-700 tw-bg-neutral-800 tw-font-semibold tw-flex tw-flex-row tw-justify-between tw-items-center">
                <span className="tw-text-white">{urlQuery}</span>
                <Button size="sm" variant="primary" onClick={submit}>
                  GO
                </Button>
              </Card.Body>
            )}
            {chatGptResultState !== ChatGptResultState.INITIAL && (
              <Card.Body>
                <ChatGptResult></ChatGptResult>
              </Card.Body>
            )}
          </Card>
        </div>
      )}
    </>
  );
}
