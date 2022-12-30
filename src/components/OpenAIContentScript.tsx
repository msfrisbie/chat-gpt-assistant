import React, { useEffect } from "react";
import { ChatGptMessageType } from "../consts";

export default function OpenAIContentScript() {
  useEffect(() => {
    setTimeout(() => {
      // Give the background a little time to get the new tab id
      chrome.runtime.sendMessage(
        {
          type: ChatGptMessageType.GET_PROMPT,
        },
        (response) => {
          const prompt = response.data?.prompt;

          if (prompt) {
            const textarea: HTMLTextAreaElement | null =
              document.querySelector("form textarea");
            const submitButton: HTMLButtonElement | null =
              document.querySelector("form button");

            if (!textarea || !submitButton) {
              console.error("Cannot find required elements");
              return;
            }

            textarea.value = prompt;
            setTimeout(() => {
              submitButton.click();
              chrome.runtime.sendMessage({
                type: ChatGptMessageType.BURN_PROMPT,
              });
            }, 0);
          }
        }
      );
    }, 500);
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}
