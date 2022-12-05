import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { CHAT_GPT_HISTORY_KEY } from "../consts";
import GoogleCard from "./GoogleCard";
import History from "./History";

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

export default function Search() {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    getCurrentTab().then((tab: chrome.tabs.Tab) => {
      if (!tab?.url) {
        return;
      }

      const q: string = new URL(tab.url).searchParams.get("q") || "";

      if (q) {
        setQuery(q);
        setInputValue(q);
      }
    });

    chrome.storage.local.get(CHAT_GPT_HISTORY_KEY).then((result: any) => {
      if (result[CHAT_GPT_HISTORY_KEY]) {
        setHistory(result[CHAT_GPT_HISTORY_KEY]);
      }
    });
  }, []);

  const handleOnChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.code === "Enter") {
      setQuery(event.target.value);
      pushHistoryItem(event.target.value);
    }
  };

  const reset = () => {
    setQuery("");
    setInputValue("");
    inputRef.current.focus();
  };

  const selectHistoryItem = (historyItem: string) => {
    setInputValue(historyItem);
    setQuery(historyItem);
    pushHistoryItem(historyItem);
  };

  const pushHistoryItem = (historyItem: string) => {
    const newHistory = [
      historyItem,
      ...history.filter((x) => x !== historyItem),
    ];
    setHistory(newHistory);
    chrome.storage.local.set({ [CHAT_GPT_HISTORY_KEY]: newHistory });
  };

  return (
    <div className="tw-min-h-full tw-bg-neutral-900 tw-text-white tw-p-8 tw-flex tw-flex-col tw-items-stretch tw-gap-8">
      <InputGroup>
        <Form.Control
          value={inputValue}
          placeholder="ChatGPT prompt"
          onChange={handleOnChange}
          onKeyPress={handleKeyPress}
          ref={inputRef}
        />
        {query && <Button onClick={reset}>RESET</Button>}
      </InputGroup>
      {query && <GoogleCard query={query || ""}></GoogleCard>}
      {!query && (
        <History
          selectHistoryItem={selectHistoryItem}
          history={history}
          inputValue={inputValue}
        ></History>
      )}
    </div>
  );
}
