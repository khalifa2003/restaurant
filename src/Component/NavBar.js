import React, { useState } from "react";
import { Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import img from "./Logo.png";

const NavBar = ({ filterSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const onSearch = () => {
    filterSearch(searchValue);
    setSearchValue("");
  };
  return (
    <Row className="m-0">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">
              <img src={img} />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="إبحث..."
                className="mx-2"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onSearch();
                }}
                className="btn-search"
              >
                بحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
