import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { SearchContext } from "../contexts/Search";
import GoogleCard from "./GoogleCard";
import History from "./History";

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const { executeSearch, resetSearch, query } = useContext(SearchContext);

  useEffect(() => {
    getCurrentTab().then((tab: chrome.tabs.Tab) => {
      if (!tab?.url) {
        return;
      }

      const q: string = new URL(tab.url).searchParams.get("q") || "";

      if (q) {
        setInputValue(q);
        search(q);
      }
    });

    inputRef.current.focus();
  }, []);

  const search = (question: string) => {
    executeSearch(question);
  };

  const handleOnChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.code === "Enter") {
      search(event.target.value);
    }
  };

  const reset = () => {
    setInputValue("");
    resetSearch();
    inputRef.current.focus();
  };

  const selectHistoryItem = (historyItem: string) => {
    setInputValue(historyItem);
    search(historyItem);
  };

  return (
    <div className="tw-bg-neutral-900 tw-text-white tw-p-8 tw-flex tw-flex-col tw-items-stretch tw-gap-8">
      <InputGroup>
        <Form.Control
          value={inputValue}
          placeholder="ChatGPT prompt"
          onChange={handleOnChange}
          onKeyPress={handleKeyPress}
          ref={inputRef}
          disabled={!!query}
        />
        {query && <Button onClick={reset}>RESET</Button>}
      </InputGroup>
      {query && <GoogleCard></GoogleCard>}
      {!query && (
        <History
          selectHistoryItem={selectHistoryItem}
          inputValue={inputValue}
        ></History>
      )}
    </div>
  );
}
