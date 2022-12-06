import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { createHashRouter, RouterProvider } from "react-router-dom";
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
          <Navbar.Brand href="#/">ChatGPT Assistant</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#/">Search</Nav.Link>
              <Nav.Link href="#/how-to-use">How to use</Nav.Link>
              {/* <Nav.Link href="#/settings">Settings</Nav.Link> */}
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
