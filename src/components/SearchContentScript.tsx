import {
  faChevronDown,
  faChevronUp,
  faCog,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  ChatGptMessageType,
  ChatGptSettingsKey,
  ChatGptThreadState,
} from "../consts";
import { IRootState } from "../features/interfaces";
import { executeSearch, setInputValue } from "../features/search/searchSlice";
import { getAllSettings, getSetting } from "../utils/settings";
import ChatGptResult from "./ChatGptResult";

export default function SearchContentScript() {
  const theme = useSelector((state: IRootState) => state.shared.theme);

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
      if (!q) {
        return;
      }

      setShowOverlay(settings[ChatGptSettingsKey.ENABLE_CONTENT_SCRIPT]);

      dispatch(setInputValue({ inputValue: q }));

      if (settings[ChatGptSettingsKey.EAGER_SEARCH]) {
        search();
      }
    });
  }, []);

  const search = async () => {
    let prompt = q;

    const search = {
      prompt: q,
      hiddenPrefix: "",
      hiddenSuffix: "",
    };

    if (await getSetting(ChatGptSettingsKey.SHORT_SEARCH_RESPONSES)) {
      search.hiddenSuffix = `The response must be short.`;
    }

    dispatch(executeSearch(search));
  };

  const openSettings = () => {
    chrome.runtime.sendMessage({
      type: ChatGptMessageType.OPEN_SETTINGS,
    });
  };

  return (
    <>
      {showOverlay && (
        <div
          style={{ maxHeight: "80vh" }}
          className="tw-bg-white tw-text-gray-800 dark:tw-text-white dark:tw-bg-neutral-800 tw-rounded-xl tw-border tw-border-solid tw-border-gray-700 tw-overflow-y-auto"
        >
          <Card className="dark:tw-bg-neutral-800">
            {chatGptResultState !== ChatGptThreadState.INITIAL && (
              <Card.Body style={{ display: expandOverlay ? "block" : "none" }}>
                <ChatGptResult></ChatGptResult>
              </Card.Body>
            )}
            <Card.Body className="tw-border-b tw-border-solid tw-border-gray-700 tw-font-semibold tw-flex tw-flex-row tw-justify-between tw-items-center">
              <span>{inputText}</span>
              {chatGptResultState === ChatGptThreadState.INITIAL && (
                <Button size="sm" variant={theme} onClick={search}>
                  GO
                </Button>
              )}
              {chatGptResultState !== ChatGptThreadState.INITIAL && (
                <div className="tw-flex tw-flex-row tw-gap-1">
                  <Button size="sm" variant={theme} onClick={openSettings}>
                    <FontAwesomeIcon
                      className="tw-w-4 tw-h-4"
                      icon={faCog}
                    ></FontAwesomeIcon>
                  </Button>
                  <Button
                    size="sm"
                    variant={theme}
                    onClick={() => setExpandOverlay(!expandOverlay)}
                  >
                    <FontAwesomeIcon
                      className="tw-w-4 tw-h-4"
                      icon={expandOverlay ? faChevronDown : faChevronUp}
                    ></FontAwesomeIcon>
                  </Button>
                  <Button
                    size="sm"
                    variant={theme}
                    onClick={() => setShowOverlay(false)}
                  >
                    <FontAwesomeIcon
                      className="tw-w-4 tw-h-4"
                      icon={faTimes}
                    ></FontAwesomeIcon>
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
}
