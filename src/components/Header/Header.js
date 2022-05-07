import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navbarStyle = {
    margin: "20px",
    textDecoration: "none",
    color: "darkviolet",
  };
  // navbar css here
  return (
    <Navbar bg="light " className="sticky-top" expand="lg">
      <Container>
        <Navbar.Brand href="#" id="logo">
          E-Learning courses
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 mx-3 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              style={navbarStyle}
              to="/home"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Home
            </NavLink>
            <NavLink
              style={navbarStyle}
              to="/about"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              About
            </NavLink>
            <NavLink
              style={navbarStyle}
              to="/courses"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Courses
            </NavLink>
            <NavLink
              style={navbarStyle}
              to="/login-register"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Register
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
