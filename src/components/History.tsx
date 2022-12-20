import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../features/interfaces";
import {
  executeSearch,
  removeHistoryItem,
} from "../features/search/searchSlice";

export default function History() {
  const history = useSelector((state: IRootState) => state.search.history);
  const inputValue = useSelector(
    (state: IRootState) => state.search.inputValue
  );
  const dispatch = useDispatch();

  return (
    <>
      {history
        .filter((x: string) =>
          x.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((x) => (
          <div
            key={x}
            className="tw-rounded-md tw-p-2 tw-bg-gray-800 tw-text-white tw-flex tw-flex-row tw-items-stretch tw-flex-nowrap"
          >
            <div className="tw-grow">
              <div
                onClick={() => dispatch(executeSearch({ prompt: x }))}
                className="tw-cursor-pointer tw-opacity-80 hover:tw-opacity-100"
              >
                {x}
              </div>
            </div>
            <div className="tw-grow-0">
              <Button variant="dark" size="sm">
                <FontAwesomeIcon
                  onClick={() =>
                    dispatch(removeHistoryItem({ historyElement: x }))
                  }
                  icon={faTimes}
                />
              </Button>
            </div>
          </div>
        ))}
    </>
  );
}
