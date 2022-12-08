import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChatGptResultState } from "../consts";
import { SearchContext } from "../contexts/Search";

export default function ChatGptResult() {
  const { chatGptResultState, output } = useContext(SearchContext);

  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");

      return (
        <SyntaxHighlighter style={vs2015} children={children} {...props} />
      );
    },
  };

  return (
    <div className="tw-text-white">
      {chatGptResultState === ChatGptResultState.INITIAL && <></>}
      {chatGptResultState === ChatGptResultState.LOADING && (
        <div className="loading tw-text-gray-300">
          Waiting for ChatGPT response...
        </div>
      )}
      {chatGptResultState === ChatGptResultState.SUCCESS && (
        <div id="chatgpt-result" style={{ color: "white" }}>
          <ReactMarkdown
            children={output}
            components={components}
          ></ReactMarkdown>
        </div>
      )}
      {chatGptResultState === ChatGptResultState.UNAUTHORIZED && (
        <div>
          Please login at{" "}
          <a href="https://chat.openai.com" target="_blank">
            chat.openai.com
          </a>{" "}
          first
        </div>
      )}
      {chatGptResultState === ChatGptResultState.ERROR && (
        <div>Failed to load response from ChatGPT</div>
      )}
    </div>
  );
}
