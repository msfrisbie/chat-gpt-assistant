import {
  default as React,
  default as React,
  useContext,
  useEffect,
  useState,
} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ChatGptSettingsKey, ChatGptThreadState } from "../consts";
import { SearchContext } from "../contexts/Search";
import { getAllSettings } from "../utils/settings";
import ChatGptResult from "./ChatGptResult";

export default function ContentScript() {
  const q: string = new URL(window.location.href).searchParams.get("q") || "";

  const [showOverlay, setShowOverlay] = useState(false);
  const { executeSearch, chatGptResultState, query } =
    useContext(SearchContext);

  useEffect(() => {
    getAllSettings().then((settings) => {
      setShowOverlay(settings[ChatGptSettingsKey.ENABLE_CONTENT_SCRIPT]);

      if (settings[ChatGptSettingsKey.EAGER_SEARCH]) {
        search();
      }
    });
  }, []);

  const search = () => {
    executeSearch(q);
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
              {chatGptResultState === ChatGptThreadState.INITIAL && (
                <Button size="sm" variant="primary" onClick={search}>
                  GO
                </Button>
              )}
            </Card.Body>
            {chatGptResultState !== ChatGptThreadState.INITIAL && (
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
