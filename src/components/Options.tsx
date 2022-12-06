import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Search from "./Search";

const router = createHashRouter([
  {
    path: "/",
    element: <Search></Search>,
  },
]);

export default function Options() {
  return (
    <div className="tw-w-full tw-grow tw-bg-neutral-900 tw-flex tw-flex-col tw-items-center">
      {/* <Navbar className="tw-w-full" variant="dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <div
        style={{ maxWidth: "600px" }}
        className="tw-w-full tw-flex tw-flex-col tw-items-stretch"
      >
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
