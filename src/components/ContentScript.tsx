import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ChatGptResultState, ChatGptSettingsKey, MessageType } from "../consts";
import { SearchContext } from "../contexts/Search";
import { ContentScriptMessageChannel } from "../utils/messaging";
import { getAllSettings } from "../utils/settings";
import ChatGptResult from "./ChatGptResult";

export default function ContentScript() {
  const q: string = new URL(window.location.href).searchParams.get("q") || "";

  const [showCard, setShowCard] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const {
    executeSearch,
    searchSuccess,
    searchUnauthorized,
    searchError,
    chatGptResultState,
  } = useContext(SearchContext);

  const messageChannel = new ContentScriptMessageChannel();
  messageChannel.connect();

  useEffect(() => {
    getAllSettings().then((settings) => {
      setShowCard(settings[ChatGptSettingsKey.EAGER_SEARCH]);
      setShowOverlay(settings[ChatGptSettingsKey.ENABLE_CONTENT_SCRIPT]);
    });

    messageChannel.addMessageHandler(
      MessageType.SEND_PROMPT_RESPONSE,
      // TODO: is this sending partial each time?
      (msg: any) => {
        if (msg.answer) {
          searchSuccess(msg.answer);
        } else if (msg.error === "UNAUTHORIZED") {
          searchUnauthorized();
        } else {
          searchError();
        }
      }
    );
  }, []);

  const submit = () => {
    setShowCard(true);
    messageChannel.resetChannelId();
    messageChannel.send({ question: q });
    executeSearch(q);
  };

  return (
    <>
      {showOverlay && q && (
        <div
          style={{ maxHeight: "80vh" }}
          className="tw-rounded-xl tw-border tw-border-solid tw-border-gray-700 tw-overflow-y-auto"
        >
          <Card style={{ backgroundColor: "#111111" }} text="white">
            {chatGptResultState === ChatGptResultState.INITIAL && (
              <Card.Body className="tw-border-b tw-border-solid tw-border-gray-700 tw-bg-neutral-800 tw-font-semibold tw-flex tw-flex-row tw-justify-between tw-items-center">
                <span className="tw-text-white">{q}</span>
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
