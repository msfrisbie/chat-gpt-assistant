import {
  faCog,
  faQuestionCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ai from "../assets/images/ai.png";
import { ChatGptMessageType } from "../consts";
import { IRootState } from "../features/interfaces";
import Feedback from "./Feedback";
import Help from "./Help";
import Settings from "./Settings";

chrome.runtime.sendMessage({
  type: ChatGptMessageType.TRACK_EVENT,
  data: {
    eventName: "Opened options",
  },
});

const router = createHashRouter([
  {
    path: "/",
    element: <Help></Help>,
  },
  {
    path: "/settings",
    element: <Settings></Settings>,
  },
  {
    path: "/feedback",
    element: <Feedback></Feedback>,
  },
]);

export default function Options() {
  const theme = useSelector((state: IRootState) => state.shared.theme);

  return (
    <div className="tw-w-full tw-grow tw-text-gray-800 dark:tw-text-white tw-bg-white dark:tw-bg-neutral-900 tw-flex tw-flex-col tw-items-center">
      <Navbar className="tw-w-full" variant={theme} bg={theme} expand="lg">
        <Container>
          <Navbar.Brand
            href="#/"
            className="tw-flex tw-flex-row tw-items-center tw-gap-2"
          >
            <img style={{ width: "1.5rem" }} src={ai} />
            <span>ChatGPT Assistant</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#/">
                <div className="tw-flex tw-flex-row tw-items-center tw-gap-1 px-2">
                  <FontAwesomeIcon icon={faSearch} />
                  <span>Search</span>
                </div>
              </Nav.Link> */}
              <Nav.Link href="#/">
                <div className="tw-flex tw-flex-row tw-items-center tw-gap-1 px-2">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                  <span>How to use</span>
                </div>
              </Nav.Link>
              <Nav.Link href="#/settings">
                <div className="tw-flex tw-flex-row tw-items-center tw-gap-1 px-2">
                  <FontAwesomeIcon icon={faCog} />
                  <span>Settings</span>
                </div>
              </Nav.Link>
              <Nav.Link href="#/feedback">
                <div className="tw-flex tw-flex-row tw-items-center tw-gap-1 px-2">
                  <FontAwesomeIcon icon={faStar} />
                  <span>Feedback</span>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        style={{ maxWidth: "600px" }}
        className="tw-w-full tw-flex tw-flex-col tw-items-stretch"
      >
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}
