import React from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import contextMenuImage from "../assets/images/contextmenu.png";
import googleImage from "../assets/images/google.png";
import omniboxImage from "../assets/images/omnibox.png";
import popupImage from "../assets/images/popup.png";
import emailImage from "../assets/images/email.png";
import { IRootState } from "../features/interfaces";

export default function Help() {
  const theme = useSelector((state: IRootState) => state.shared.theme);

  return (
    <div className="tw-p-8 tw-flex tw-flex-col tw-items-stretch tw-gap-8">
      <div className="tw-text-2xl tw-text-blue-300">
        How do I use ChatGPT Assistant?
      </div>

      <div className="">
        You must be logged in to{" "}
        <a target="_blank" href="https://chat.openai.com/chat">
          https://chat.openai.com/chat
        </a>{" "}
        to use the ChatGPT Assistant. Once you are logged in, the assistant can
        send prompts on your behalf.
      </div>

      <div className="tw-text-2xl tw-text-blue-300">
        Where can I use ChatGPT Assistant?
      </div>

      <Card bg={theme}>
        <Card.Img src={popupImage} />
        <Card.Body>
          <Card.Title className="tw-text-xl tw-font-semibold">
            Send ChatGPT prompts from a popup
          </Card.Title>
          <Card.Text>
            Quickly access ChatGPT with the Ctrl + Shift + K command
          </Card.Text>
        </Card.Body>
      </Card>

      <Card bg={theme}>
        <Card.Img src={omniboxImage} />
        <Card.Body>
          <Card.Title className="tw-text-xl tw-font-semibold">
            Send ChatGPT prompts from the omnibox
          </Card.Title>
          <Card.Text>
            Type "gpt" + space in the omnibox to send ChatGPT prompts from the
            omnibox
          </Card.Text>
        </Card.Body>
      </Card>

      <Card bg={theme}>
        <Card.Img src={contextMenuImage} />
        <Card.Body>
          <Card.Title className="tw-text-xl tw-font-semibold">
            Use selected text as prompts
          </Card.Title>
          <Card.Text>
            Select text and right click to send it as a ChatGPT prompt.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card variant={theme} className="dark:tw-bg-dark">
        <Card.Img src={emailImage} />
        <Card.Body>
          <Card.Title className="tw-text-xl tw-font-semibold">
            AI Email Generation (beta)
          </Card.Title>
          <Card.Text>
            Use ChatGPT to componse and reply to emails. Enable this in
            settings.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card bg={theme}>
        <Card.Img src={googleImage} />
        <Card.Body>
          <Card.Title className="tw-text-xl tw-font-semibold">
            Search engine companion
          </Card.Title>
          <Card.Text>
            Automatically send search engine queries as prompts
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
