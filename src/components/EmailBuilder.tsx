import {
  faArrowUpRightFromSquare,
  faChevronDown,
  faChevronUp,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConversationResponseEvent } from "chatgpt/build/browser";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import { useDispatch, useSelector } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
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

interface Email {
  messageId: string;
  messageContent: string;
}

export default function EmailBuilder() {
  const theme = useSelector((state: IRootState) => state.shared.theme);

  const [activeMessageId, setActiveMessageId] = useState<string | null>(null);
  const [emails, setEmails] = useState<Email[]>([]);
  const [editables, setEditables] = useState<Element[]>([]);
  const [emailBody, setEmailBody] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  const chatGptResultState = useSelector(
    (state: IRootState) => state.search.chatGptResultState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("foobar");
    const debouncedHandler = _.debounce(
      () => {
        setEmails(
          [...document.querySelectorAll("[data-message-id]")].map((el: any) => {
            return {
              messageId: el.getAttribute("data-message-id"),
              messageContent: el.innerText,
            };
          })
        );
        setEditables([...document.querySelectorAll(".editable")]);
      },
      100,
      {
        leading: true,
        maxWait: 300,
        trailing: true,
      }
    );

    const observer = new MutationObserver(() => debouncedHandler());

    observer.observe(document.body, { subtree: true, childList: true });

    debouncedHandler();
  }, []);

  useEffect(() => {
    let newActiveMessageId: string | null = activeMessageId;
    if (!emails.length) {
      newActiveMessageId = null;
    } else if (!emails.find((email) => email.messageId === activeMessageId)) {
      newActiveMessageId = emails[emails.length - 1].messageId;
    }

    setActiveMessageId(newActiveMessageId);

    for (const el of [...document.querySelectorAll("[data-message-id]")]) {
      if (el.getAttribute("data-message-id") === activeMessageId) {
        // @ts-ignore
        el.style.border = "1px solid rgba(56,189,248,100)";
      } else {
        // @ts-ignore
        el.style.border = "0px";
      }
    }
  }, [activeMessageId, emails]);

  const shiftActiveMessage = (offset: number) => {
    let idx = emails.findIndex((email) => email.messageId === activeMessageId);

    if (idx < 0) {
      idx = emails.length - 1;
    }

    idx += offset;

    if (idx < 0) {
      idx = emails.length - 1;
    }

    if (idx >= emails.length) {
      idx = 0;
    }

    setActiveMessageId(emails[idx].messageId);

    document
      .querySelector(`[data-message-id="${emails[idx].messageId}"]`)
      ?.scrollIntoView();
  };

  const fill = () => {
    if (editables.length > 0) {
      editables[0].textContent = answer + editables[0].textContent;
    }
  };

  const writeEmail = () => {
    const prompt = `
        Write an email reply. The reply should accomplish the following: ${emailBody}. Only respond with the email body, no signature.

        Reply to the following email:

        ${
          emails.find((email) => email.messageId === activeMessageId)
            ?.messageContent
        }
    `;

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
  };

  return (
    <div>
      {/* <div>{activeMessageId}</div> */}
      {emails.length > 1 && (
        <div className="tw-flex tw-flex-row tw-justify-between">
          <Button variant={theme} onClick={() => shiftActiveMessage(-1)}>
            <FontAwesomeIcon
              icon={faChevronUp}
              className="tw-h-4"
            ></FontAwesomeIcon>
          </Button>
          <span>Select email</span>
          <Button variant={theme} onClick={() => shiftActiveMessage(1)}>
            <FontAwesomeIcon
              className="tw-h-4"
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </Button>
        </div>
      )}
      <TextareaAutosize
        onChange={(e) => setEmailBody(e.target.value)}
        className="tw-p-2 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-neutral-50 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-ring-blue-500 focus:tw-border-blue-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
        placeholder="Write your thoughts here..."
      />

      <div>
        {chatGptResultState === ChatGptThreadState.INITIAL && <></>}
        {chatGptResultState === ChatGptThreadState.LOADING && (
          <div className="loading tw-text-gray-300">
            Waiting for ChatGPT response...
          </div>
        )}
        {chatGptResultState === ChatGptThreadState.SUCCESS_INFLIGHT && (
          <div id="chatgpt-result">
            <div>{answer}</div>
          </div>
        )}
        {chatGptResultState === ChatGptThreadState.SUCCESS_COMPLETE && (
          <div id="chatgpt-result">
            <div>{answer}</div>
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
      <Button onClick={writeEmail}>WRITE EMAIL</Button>
      {answer.length > 0 && <Button onClick={fill}>FILL</Button>}
    </div>
  );
}
