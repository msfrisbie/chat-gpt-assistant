import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChatGptMessageType } from "../consts";
import { IChatGptPostMessage } from "../interfaces/settings";
import { sendPromptFromContentScript } from "../utils/messaging";

enum State {
  INITIAL,
  UNAUTHORIZED,
  LOADING,
  SUCCESS,
  ERROR,
}

export default function GoogleCard(props: any) {
  const [cardState, setCardState] = useState(State.INITIAL);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (props.query && props.query.length > 0) {
      setCardState(State.LOADING);

      console.log("Sending", props.query.slice(0, 20));

      sendPromptFromContentScript(
        props.query,
        (message: IChatGptPostMessage) => {
          switch (message.messageType) {
            case ChatGptMessageType.ANSWER_TEXT_FROM_BG:
              setAnswer(message.data.answer);
              setCardState(State.SUCCESS);
              break;
            case ChatGptMessageType.ANSWER_DONE_FROM_BG:
              console.log("Message done");
              break;
            case ChatGptMessageType.ANSWER_ERROR_FROM_BG:
              if (message.data.error === "UNAUTHORIZED") {
                setCardState(State.UNAUTHORIZED);
              } else {
                setCardState(State.ERROR);
              }
              break;
            default:
              throw new Error("Unrecognized message");
          }
        }
      );
    } else {
      setCardState(State.INITIAL);
    }
  }, [props.query]);

  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");

      return (
        <SyntaxHighlighter style={vs2015} children={children} {...props} />
      );
    },
  };

  return (
    <div>
      {cardState === State.INITIAL && <></>}
      {cardState === State.LOADING && (
        <div className="loading tw-text-gray-300">
          Waiting for ChatGPT response...
        </div>
      )}
      {cardState === State.SUCCESS && (
        <div
          id="chatgpt-result"
          className="tw-text-white"
          style={{ color: "white" }}
        >
          <ReactMarkdown
            children={answer}
            components={components}
          ></ReactMarkdown>
        </div>
      )}
      {cardState === State.UNAUTHORIZED && (
        <div className="tw-text-white">
          Please login at{" "}
          <a href="https://chat.openai.com" target="_blank">
            chat.openai.com
          </a>{" "}
          first
        </div>
      )}
      {cardState === State.ERROR && <p>Failed to load response from ChatGPT</p>}
    </div>
  );
}
