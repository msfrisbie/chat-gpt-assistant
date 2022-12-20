import {
  faCog,
  faQuestionCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Provider } from "react-redux";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ai from "../assets/images/ai.png";
import { store } from "../store";
import Help from "./Help";
import Search from "./Search";
import Settings from "./Settings";

const router = createHashRouter([
  {
    path: "/",
    element: <Search></Search>,
  },
  {
    path: "/how-to-use",
    element: <Help></Help>,
  },
  {
    path: "/settings",
    element: <Settings></Settings>,
  },
]);

export default function Options() {
  return (
    <div className="tw-w-full tw-grow tw-bg-neutral-900 tw-flex tw-flex-col tw-items-center">
      <Navbar className="tw-w-full" variant="dark" bg="dark" expand="lg">
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
              <Nav.Link href="#/">
                <div className="tw-flex tw-flex-row tw-items-center tw-gap-1 px-2">
                  <FontAwesomeIcon icon={faSearch} />
                  <span>Search</span>
                </div>
              </Nav.Link>
              <Nav.Link href="#/how-to-use">
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        style={{ maxWidth: "600px" }}
        className="tw-w-full tw-flex tw-flex-col tw-items-stretch"
      >
        <Provider store={store}>
          <RouterProvider router={router}></RouterProvider>
        </Provider>
      </div>
    </div>
  );
}
