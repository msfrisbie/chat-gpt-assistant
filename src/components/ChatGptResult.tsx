import {
  faArrowUpRightFromSquare,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConversationResponseEvent } from "chatgpt/build/browser";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChatGptMessageType, ChatGptThreadState } from "../consts";
import { IRootState } from "../features/interfaces";
import {
  searchError,
  searchSuccessComplete,
  searchSuccessInflight,
  searchUnauthorized,
} from "../features/search/searchSlice";
import { IChatGptPostMessage } from "../interfaces/settings";
import { sendPromptFromContentScript } from "../utils/messaging";

export default function ChatGptResult() {
  const theme = useSelector((state: IRootState) => state.shared.theme);

  const [answer, setAnswer] = useState("");
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  const query = useSelector((state: IRootState) => state.search.query);
  const hiddenPrefix = useSelector(
    (state: IRootState) => state.search.hiddenPrefix
  );
  const hiddenSuffix = useSelector(
    (state: IRootState) => state.search.hiddenSuffix
  );
  const chatGptResultState = useSelector(
    (state: IRootState) => state.search.chatGptResultState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Sending", query.slice(0, 20));

    let prompt = query;

    if (hiddenPrefix) {
      prompt = hiddenPrefix + "\n\n" + prompt;
    }
    if (hiddenSuffix) {
      prompt = prompt + "\n\n" + hiddenSuffix;
    }

    console.log({ prompt });

    sendPromptFromContentScript(prompt, (message: IChatGptPostMessage) => {
      switch (message.messageType) {
        case ChatGptMessageType.ANSWER_TEXT_FROM_BG:
          const conversationResponse: ConversationResponseEvent =
            message.data.conversationResponse;
          setAnswer(conversationResponse.message?.content.parts[0] as string);
          setConversationId(conversationResponse.conversation_id as string);
          dispatch(searchSuccessInflight({}));
          break;
        case ChatGptMessageType.ANSWER_DONE_FROM_BG:
          dispatch(searchSuccessComplete({}));
          break;
        case ChatGptMessageType.ANSWER_ERROR_FROM_BG:
          if (message.data.error === "UNAUTHORIZED") {
            dispatch(searchUnauthorized({}));
          } else {
            dispatch(searchError({}));
          }
          break;
        default:
          throw new Error("Unrecognized message");
      }
    });
  }, [query]);

  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");

      return (
        <SyntaxHighlighter style={vs2015} children={children} {...props} />
      );
    },
  };

  const copyToClipbboard = (text: string) => {
    setShow(true);

    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      {chatGptResultState === ChatGptThreadState.INITIAL && <></>}
      {chatGptResultState === ChatGptThreadState.LOADING && (
        <div className="loading tw-text-gray-300">
          Waiting for ChatGPT response...
        </div>
      )}
      {chatGptResultState === ChatGptThreadState.SUCCESS_INFLIGHT && (
        <div id="chatgpt-result">
          <ReactMarkdown
            children={answer}
            components={components}
          ></ReactMarkdown>
        </div>
      )}
      {chatGptResultState === ChatGptThreadState.SUCCESS_COMPLETE && (
        <div id="chatgpt-result">
          <ReactMarkdown
            children={answer}
            components={components}
          ></ReactMarkdown>
          {conversationId && (
            <div className="tw-flex tw-flex-col tw-items-stretch gap-2">
              <Button
                variant={theme}
                size="sm"
                onClick={() => copyToClipbboard(answer)}
              >
                <div className="tw-flex tw-flex-row tw-items-center tw-gap-2">
                  <FontAwesomeIcon
                    className="tw-h-4"
                    icon={faCopy}
                  ></FontAwesomeIcon>
                  <span>COPY RESULT</span>
                </div>
              </Button>
              <Button
                variant={theme}
                size="sm"
                href={`https://chat.openai.com/chat/${conversationId}`}
                target="_blank"
              >
                <div className="tw-flex tw-flex-row tw-items-center tw-gap-2">
                  <FontAwesomeIcon
                    className="tw-h-4"
                    icon={faArrowUpRightFromSquare}
                  ></FontAwesomeIcon>
                  <span>CONTINUE CHAT THREAD</span>
                </div>
              </Button>
            </div>
          )}
        </div>
      )}
      {chatGptResultState === ChatGptThreadState.UNAUTHORIZED && (
        <div>
          Please login at{" "}
          <a href="https://chat.openai.com" target="_blank">
            chat.openai.com
          </a>{" "}
          first
        </div>
      )}
      {chatGptResultState === ChatGptThreadState.ERROR && (
        <div>Failed to load response from ChatGPT</div>
      )}

      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={1500}
        autohide
        className="tw-absolute"
        bg={theme}
      >
        <Toast.Body>Copied result to clipboard</Toast.Body>
      </Toast>
    </div>
  );
}
