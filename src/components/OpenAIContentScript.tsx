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
          console.log(response);

          const prompt = response.data?.prompt;

          if (prompt) {
            console.log({ prompt });

            const textarea: HTMLTextAreaElement | null =
              document.querySelector("form textarea");
            const submitButton: HTMLButtonElement | null =
              document.querySelector("form button");

            if (!textarea || !submitButton) {
              console.error("Cannot find required elements");
              return;
            }

            chrome.runtime.sendMessage({
              type: ChatGptMessageType.BURN_PROMPT,
            });
            textarea.value = prompt;
            setTimeout(() => {
              submitButton.click();
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
