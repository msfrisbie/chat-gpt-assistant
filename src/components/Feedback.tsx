import React from "react";
import { Button } from "react-bootstrap";

export default function Help() {
  return (
    <div className="tw-p-8 tw-flex tw-flex-col tw-items-stretch tw-gap-8">
      {/* <div className="tw-text-2xl tw-text-blue-300">Leave a review!</div> */}

      <div className="">
        ChatGPT Assistant is free and open source software. If you're enjoying
        the extension, please write a review. It only takes 5 seconds!
      </div>

      <Button
        href="https://chrome.google.com/webstore/detail/chatgpt-assistant/kldepdcdedfibmjnggmolhffdddbphjg/reviews"
        target="_blank"
      >
        WRITE A REVIEW
      </Button>

      <div>
        The{" "}
        <a
          href="https://github.com/msfrisbie/chat-gpt-assistant/issues"
          target="_blank"
        >
          issues page
        </a>{" "}
        on GitHub is actively monitored, please feel free to submit feature
        requests and bugs.
      </div>
    </div>
  );
}
