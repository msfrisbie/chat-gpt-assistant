import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ReactMarkdown from "react-markdown";

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
    console.log({ props });
    if (props.query && props.query.length > 0) {
      port.postMessage({ question: props.query });
      setCardState(State.LOADING);
    } else {
      setCardState(State.INITIAL);
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
    <>
      <Card className="bg-dark tw-text-white">
        <Card.Body>
          <div>
            {cardState === State.INITIAL && <></>}
            {cardState === State.LOADING && (
              <div className="loading tw-text-gray-300">
                Waiting for ChatGPT response...
              </div>
            )}
            {cardState === State.SUCCESS && (
              <div id="chatgpt-result">
                <ReactMarkdown>{msg.answer}</ReactMarkdown>
              </div>
            )}
            {cardState === State.UNAUTHORIZED && (
              <div>
                Please login at{" "}
                <a href="https://chat.openai.com" target="_blank">
                  chat.openai.com
                </a>{" "}
                first
              </div>
            )}
            {cardState === State.ERROR && (
              <p>Failed to load response from ChatGPT</p>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
