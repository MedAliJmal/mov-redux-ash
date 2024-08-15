import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";

const Entete = ({ handleSearch, handleCategory }) => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <select
              name=""
              id=""
              onChange={handleCategory}
            >
              <option value="ALL">All</option>
              <option value="SF">Science Fiction</option>
              <option value="Cartoon">Cartoon</option>
              <option value="Kids">For Kids</option>
            </select>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleSearch}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Entete;
