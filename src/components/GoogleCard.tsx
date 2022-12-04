import React, { useEffect, useState } from "react";

enum State {
  INITIAL,
  UNAUTHORIZED,
  LOADING,
  SUCCESS,
  ERROR,
}

export default function GoogleCard(props: any) {
  const [cardState, setCardState] = useState(State.INITIAL);
  const [msg, setMsg] = useState({});

  let port = chrome.runtime.connect();
  port.onMessage.addListener((msg: any) => {
    console.log(msg);
    if (msg.answer) {
      setMsg(msg);
      setCardState(State.SUCCESS);
    } else if (msg.error === "UNAUTHORIZED") {
      setCardState(State.UNAUTHORIZED);
    } else {
      setCardState(State.ERROR);
    }
  });

  useEffect(() => {}, []);

  useEffect(() => {
    if (props.query) {
      port.postMessage({ question: props.query });
      setCardState(State.LOADING);
    } else {
    }

    // const searchInput = document.querySelector(
    //   "[name='q']"
    // ) as HTMLInputElement | null;
    // if (searchInput && searchInput.value) {
    //   // only run on first page
    //   const startParam =
    //     new URL(location.href).searchParams.get("start") || "0";
    //   if (startParam === "0") {
    //     port.postMessage({ question: searchInput.value });
    //   }
    // }
  }, [props.query]);

  return (
    <div className="w-16 m-4">
      {cardState === State.INITIAL && <></>}
      {cardState === State.LOADING && (
        <p className="loading">Waiting for ChatGPT response...</p>
      )}
      {cardState === State.SUCCESS && (
        <p>
          <span className="prefix">ChatGPT:</span>
          <pre>${msg.answer}</pre>
        </p>
      )}
      {cardState === State.UNAUTHORIZED && (
        <p>
          Please login at{" "}
          <a href="https://chat.openai.com" target="_blank">
            chat.openai.com
          </a>{" "}
          first
        </p>
      )}
      {cardState === State.ERROR && <p>Failed to load response from ChatGPT</p>}
    </div>
  );
}
