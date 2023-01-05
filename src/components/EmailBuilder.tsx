import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
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
  const [contextContainer, setContextContainer] = useState<Element | null>(
    null
  );
  const [editable, setEditable] = useState<HTMLElement | null>(null);
  const [emailFrom, setEmailFrom] = useState<string | null>(null);
  const [emailTo, setEmailTo] = useState<string | null>(null);
  const [emailBody, setEmailBody] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  const chatGptResultState = useSelector(
    (state: IRootState) => state.search.chatGptResultState
  );
  const widgetId = useSelector((state: IRootState) => state.shared.widgetId);
  const dispatch = useDispatch();

  useEffect(() => {
    const debouncedHandler = _.debounce(
      () => {
        const parentContext: HTMLElement | null = document.querySelector(
          `[chatgpt-widget-parent-context="${widgetId}"]`
        );
        const composeContext: HTMLElement | null = document.querySelector(
          `[chatgpt-widget-compose-context="${widgetId}"]`
        );

        if (!composeContext) {
          throw new Error("Missing compose context");
        }

        if (parentContext) {
          setEmails(
            [...parentContext.querySelectorAll(`[data-message-id]`)].map(
              (el: any) => ({
                messageId: el.getAttribute(`data-message-id`),
                messageContent: el.innerText,
              })
            )
          );
        }
        setEditable(composeContext.querySelector(`.editable`) as HTMLElement);
        setEmailTo(
          (composeContext.querySelector(`div[name="to"]`) as HTMLElement | null)
            ?.innerText || null
        );
        setEmailFrom(
          document
            .querySelector(`[aria-label*="Google Account:"]`)
            ?.getAttribute("aria-label")
            ?.split("(")[0]
            ?.replace("Google Account:", "") || null
        );
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

  //   useEffect(() => {
  //     let newActiveMessageId: string | null = activeMessageId;
  //     if (!emails.length) {
  //       newActiveMessageId = null;
  //     } else if (!emails.find((email) => email.messageId === activeMessageId)) {
  //       newActiveMessageId = emails[emails.length - 1].messageId;
  //     }

  //     setActiveMessageId(newActiveMessageId);

  //     for (const el of [...document.querySelectorAll("[data-message-id]")]) {
  //       if (el.getAttribute("data-message-id") === activeMessageId) {
  //         // @ts-ignore
  //         el.style.border = "1px solid rgba(56,189,248,100)";
  //       } else {
  //         // @ts-ignore
  //         el.style.border = "0px";
  //       }
  //     }
  //   }, [activeMessageId, emails]);

  //   const shiftActiveMessage = (offset: number) => {
  //     let idx = emails.findIndex((email) => email.messageId === activeMessageId);

  //     if (idx < 0) {
  //       idx = emails.length - 1;
  //     }

  //     idx += offset;

  //     if (idx < 0) {
  //       idx = emails.length - 1;
  //     }

  //     if (idx >= emails.length) {
  //       idx = 0;
  //     }

  //     setActiveMessageId(emails[idx].messageId);

  //     document
  //       .querySelector(`[data-message-id="${emails[idx].messageId}"]`)
  //       ?.scrollIntoView();
  //   };

  const writeEmail = () => {
    const emailToReplyTo: string | null =
      emails.find((email) => email.messageId === activeMessageId)
        ?.messageContent || null;

    const mainInstruction = emailToReplyTo
      ? `Write an email reply.`
      : `Write an email.`;

    const languageClause = emailToReplyTo
      ? `Reply in the same language.`
      : `Reply in the following language: ${
          document.documentElement.lang || "en"
        }`;

    const toClause = emailTo
      ? `The email should be addressed to the following people: ${emailTo}`
      : "";

    const fromClause = emailFrom
      ? `The email signature should be from: ${emailFrom}`
      : "The email signature should not be included.";

    const replyClause = emailToReplyTo
      ? `Reply to the following email:

    ${emailToReplyTo}`
      : "";

    const prompt = `
        ${mainInstruction} 
        The email should accomplish the following: ${emailBody}. 
        Only respond with the email body. 
        Place the subject at the end of the email. 
        Separate the body from the subject with #####.
        Only append the subject text, don't add a prefix to the subject.
        ${languageClause}
        ${fromClause}
        ${toClause}
        ${replyClause}
    `;

    sendPromptFromContentScript(prompt, (message: IChatGptPostMessage) => {
      switch (message.messageType) {
        case ChatGptMessageType.ANSWER_TEXT_FROM_BG:
          const conversationResponse: ConversationResponseEvent =
            message.data.conversationResponse;

          const answer: string = conversationResponse.message?.content
            .parts[0] as string;
          //   console.log({ answer, editable });

          setAnswer(answer);
          setConversationId(conversationResponse.conversation_id as string);

          const [body, subject] = answer.split("#####") as string[];

          console.log({ body, subject });

          const subjectbox = document.querySelector(
            `input[name="subjectbox"]`
          ) as HTMLInputElement;
          if (subjectbox && subject) {
            subjectbox.value = subject;
          }

          if (editable) {
            editable.innerHTML = body.replaceAll("\n", "\n<br />") as string;
          } else {
            console.error("Editable is not set");
          }
          dispatch(searchSuccessInflight({}));
          break;
        case ChatGptMessageType.ANSWER_DONE_FROM_BG:
          dispatch(searchSuccessComplete({}));
          editable?.click();
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
    <div className="tw-py-2 tw-border-b border-neutral-100">
      <div className="tw-flex tw-flex-nowrap tw-flex-row tw-items-stretch tw-gap-2">
        <div className="tw-relative tw-grow">
          <TextareaAutosize
            disabled={[
              ChatGptThreadState.SUCCESS_INFLIGHT,
              ChatGptThreadState.LOADING,
            ].includes(chatGptResultState)}
            minRows={2}
            onChange={(e) => setEmailBody(e.target.value)}
            className="tw-p-2 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-neutral-50 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-ring-blue-500 focus:tw-border-blue-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
            placeholder="Email summary"
          />
          <Button
            className="tw-absolute tw-bottom-2 tw-right-2"
            variant={theme}
            onClick={writeEmail}
            size="sm"
            disabled={[
              ChatGptThreadState.SUCCESS_INFLIGHT,
              ChatGptThreadState.LOADING,
            ].includes(chatGptResultState)}
          >
            <FontAwesomeIcon
              className="tw-h-3"
              style={{ transform: "rotate(45deg)" }}
              icon={faLocationArrow}
            ></FontAwesomeIcon>
          </Button>
        </div>
      </div>

      <div>
        {chatGptResultState === ChatGptThreadState.INITIAL && <></>}
        {chatGptResultState === ChatGptThreadState.LOADING && (
          <div className="loading tw-text-gray-300">
            Waiting for ChatGPT response...
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
    </div>
  );
}
