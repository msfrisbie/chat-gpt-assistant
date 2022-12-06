import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ChatGptSettingsKey } from "../consts";
import { getAllSettings } from "../utils/settings";
import GoogleCard from "./GoogleCard";

export default function ContentScript() {
  const query: string =
    new URL(window.location.href).searchParams.get("q") || "";

  const [showCard, setShowCard] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    getAllSettings().then((settings) => {
      setShowCard(settings[ChatGptSettingsKey.EAGER_SEARCH]);
      setShowOverlay(settings[ChatGptSettingsKey.ENABLE_CONTENT_SCRIPT]);
    });
  }, []);

  return (
    <>
      {showOverlay && (
        <div
          style={{ maxHeight: "80vh" }}
          className="tw-rounded-xl tw-border tw-border-solid tw-border-gray-700 tw-overflow-y-auto"
        >
          <Card style={{ backgroundColor: "#111111" }} text="white">
            {query && (
              <Card.Body className="tw-border-b tw-border-solid tw-border-gray-700 tw-bg-neutral-800 tw-font-semibold tw-flex tw-flex-row tw-justify-between tw-items-center">
                <span className="tw-text-white">{query}</span>
                {!showCard && (
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => setShowCard(true)}
                  >
                    GO
                  </Button>
                )}
              </Card.Body>
            )}
            {showCard && (
              <Card.Body>
                <GoogleCard query={query}></GoogleCard>
              </Card.Body>
            )}
          </Card>
        </div>
      )}
    </>
  );
}
