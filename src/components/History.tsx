import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { SearchContext } from "../contexts/Search";

export default function History({
  inputValue,
  selectHistoryItem,
}: {
  inputValue: string;
  selectHistoryItem: (historyItem: string) => void;
}) {
  const { history, removeHistoryItem } = useContext(SearchContext);

  return (
    <>
      {history
        .filter((x) => x.toLowerCase().includes(inputValue.toLowerCase()))
        .map((x) => (
          <div
            key={x}
            className="tw-p-2 tw-bg-gray-800 tw-text-white tw-flex tw-flex-row tw-items-stretch tw-flex-nowrap"
          >
            <div className="tw-grow">
              <div
                onClick={() => selectHistoryItem(x)}
                className="tw-cursor-pointer tw-opacity-80 hover:tw-opacity-100"
              >
                {x}
              </div>
            </div>
            <div className="tw-grow-0">
              <Button variant="dark" size="sm">
                <FontAwesomeIcon
                  onClick={() => {
                    removeHistoryItem(x);
                  }}
                  icon={faTimes}
                />
              </Button>
            </div>
          </div>
        ))}
    </>
  );
}
