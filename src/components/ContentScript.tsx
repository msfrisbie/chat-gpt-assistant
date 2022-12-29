import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ChatGptConversationState, ChatGptSettingsKey } from "../consts";
import { SearchContext } from "../contexts/Search";
import { useDispatch, useSelector } from "react-redux";
import { ChatGptSettingsKey, ChatGptThreadState } from "../consts";
import { IRootState } from "../features/interfaces";
import { executeSearch, setInputValue } from "../features/search/searchSlice";
import { getAllSettings } from "../utils/settings";
import ChatGptResult from "./ChatGptResult";

export default function ContentScript() {
  const q: string = new URL(window.location.href).searchParams.get("q") || "";

  const [showOverlay, setShowOverlay] = useState(false);
  const [expandOverlay, setExpandOverlay] = useState(true);

  const query = useSelector((state: IRootState) => state.search.query);
  const inputText = useSelector((state: IRootState) => state.search.inputValue);
  const chatGptResultState = useSelector(
    (state: IRootState) => state.search.chatGptResultState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getAllSettings().then((settings) => {
      setShowOverlay(settings[ChatGptSettingsKey.ENABLE_CONTENT_SCRIPT]);

      dispatch(setInputValue({ inputValue: q }));

      if (settings[ChatGptSettingsKey.EAGER_SEARCH]) {
        search();
      }
    });
  }, []);

  const search = () => {
    dispatch(executeSearch({ prompt: q }));
  };

  return (
    <>
      {showOverlay && (
        <div
          style={{ maxHeight: "80vh" }}
          className="tw-rounded-xl tw-border tw-border-solid tw-border-gray-700 tw-overflow-y-auto"
        >
          <Card style={{ backgroundColor: "#111111" }} text="white">
            <Card.Body className="tw-border-b tw-border-solid tw-border-gray-700 tw-bg-neutral-800 tw-font-semibold tw-flex tw-flex-row tw-justify-between tw-items-center">
              <span className="tw-text-white">{query}</span>
              {chatGptResultState === ChatGptConversationState.INITIAL && (
                <Button size="sm" variant="primary" onClick={search}>
                  GO
                </Button>
              )}
              {chatGptResultState !== ChatGptConversationState.INITIAL && (
                <Button
                  size="sm"
                  variant="dark"
                  onClick={() => setExpandOverlay(!expandOverlay)}
                >
                  <FontAwesomeIcon
                    className="tw-w-4 tw-h-4"
                    icon={expandOverlay ? faChevronDown : faChevronUp}
                  ></FontAwesomeIcon>
                </Button>
              )}
            </Card.Body>
            {chatGptResultState !== ChatGptConversationState.INITIAL && (
              <Card.Body style={{ display: expandOverlay ? "block" : "none" }}>
                <ChatGptResult></ChatGptResult>
              </Card.Body>
            )}
          </Card>
        </div>
      )}
    </>
  );
}
