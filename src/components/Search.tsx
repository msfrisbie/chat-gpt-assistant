import { getCurrentTab } from "../utils/tabs";
import React, { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../features/interfaces";
import {
  executeSearch,
  resetSearch,
  setInputValue,
} from "../features/search/searchSlice";
import ChatGptResult from "./ChatGptResult";
import History from "./History";

export default function Search() {
  const inputRef = useRef<Form.Control>();
  const query = useSelector((state: IRootState) => state.search.query);
  const inputValue = useSelector(
    (state: IRootState) => state.search.inputValue
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentTab().then((tab: chrome.tabs.Tab) => {
      if (!tab?.url) {
        return;
      }

      const q: string = new URL(tab.url).searchParams.get("q") || "";

      if (q) {
        dispatch(executeSearch({ prompt: q }));
      }
    });

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyPress = (event: any) => {
    if (event.code === "Enter") {
      dispatch(executeSearch({ prompt: event.target.value }));
    }
  };

  const reset = () => {
    dispatch(setInputValue({ inputValue: "" }));
    dispatch(resetSearch({}));
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="tw-bg-white dark:tw-bg-neutral-900 tw-text-gray-800- dark:tw-text-white tw-p-8 tw-flex tw-flex-col tw-items-stretch tw-gap-8">
      <InputGroup>
        <Form.Control
          value={inputValue}
          placeholder="ChatGPT prompt"
          onChange={(event) =>
            dispatch(setInputValue({ inputValue: event.target.value }))
          }
          onKeyPress={handleKeyPress}
          ref={inputRef}
          disabled={!!query}
        />
        {query && <Button onClick={reset}>RESET</Button>}
      </InputGroup>
      {query && <ChatGptResult></ChatGptResult>}
      {!query && <History></History>}
    </div>
  );
}
