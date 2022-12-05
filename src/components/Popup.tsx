import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import GoogleCard from "./GoogleCard";
import History from "./History";

const CHAT_GPT_HISTORY_KEY = "CHAT_GPT_HISTORY";

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

export default function Popup() {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    getCurrentTab().then((tab: chrome.tabs.Tab) => {
      if (!tab.url) {
        return;
      }

      const q: string = new URL(tab.url).searchParams.get("q") || "";

      if (q) {
        setQuery(q);
        setInputValue(q);
      }
    });

    chrome.storage.local.get(CHAT_GPT_HISTORY_KEY).then((result: any) => {
      if (result.history) {
        setHistory(result.history);
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
    <div className="min-h-full bg-gray-900 text-white p-8 flex flex-col items-stretch gap-8">
      <div className="bootstrap">
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
      </div>
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
