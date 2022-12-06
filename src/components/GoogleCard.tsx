import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

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

  useEffect(() => {
    if (props.query && props.query.length > 0) {
      port.postMessage({ question: props.query });
      setCardState(State.LOADING);
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

      // return !inline && match ? (
      //   <SyntaxHighlighter
      //     style={dark}
      //     PreTag="div"
      //     language={match[1]}
      //     children={String(children).replace(/\n$/, "")}
      //     {...props}
      //   />
      // ) : (
      //   <code className={className ? className : ""} {...props}>
      //     {children}
      //   </code>
      // );
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
        <div id="chatgpt-result">
          <ReactMarkdown
            children={msg.answer}
            components={components}
          ></ReactMarkdown>
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
      {cardState === State.ERROR && <p>Failed to load response from ChatGPT</p>}
    </div>
  );
}
