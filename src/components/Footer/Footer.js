import {
  faAngellist,
  faFacebook,
  faLinkedin,
  faTelegram,
  faTelegramPlane,
  faTwitter,
  faWhatsapp,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faAnglesRight,
  faSquareEnvelope,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const footerStyle = {
    color: "darkviolet",
    textDecoration: "none",
    display: "block",
    padding: "8px",
  };
  return (
    <div className="py-5  bg-dark">
      <Container className="mt-5 ">
        <Row>
          <Col className="text-secondary">
            <h4>E-learning courses</h4>
            <p className="pe-5 lh-base fs-6 ">
              We are a team of different geeks that believe in producing
              top-quality courses and category based on best videos.
            </p>
            <p>
              <FontAwesomeIcon
                icon={faSquarePhone}
                className="fa-lg icon-regular"
              />
              &nbsp;&nbsp;&nbsp;&nbsp; 088 12345 67890
            </p>
            <p>
              <FontAwesomeIcon
                icon={faSquareEnvelope}
                className="fa-lg icon-regular"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <a className="text-decoration-none " href="#">
                info@e-learning.com
              </a>
            </p>
          </Col>
          <Col>
            <h5 className="text-secondary">Quick Links</h5>
            <NavLink
              style={footerStyle}
              to="/home"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              <FontAwesomeIcon icon={faAnglesRight} /> &nbsp;&nbsp; Home
            </NavLink>
            <NavLink
              style={footerStyle}
              to="/faq"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              <FontAwesomeIcon icon={faAnglesRight} /> &nbsp;&nbsp; About
            </NavLink>
            <NavLink
              style={footerStyle}
              to="/courses"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              <FontAwesomeIcon icon={faAnglesRight} /> &nbsp;&nbsp; Courses
            </NavLink>
            <NavLink
              style={footerStyle}
              to="/faq"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              <FontAwesomeIcon icon={faAnglesRight} /> &nbsp;&nbsp; Will
            </NavLink>
            <NavLink
              style={footerStyle}
              to="/faq"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              <FontAwesomeIcon icon={faAnglesRight} /> &nbsp;&nbsp; FAQs
            </NavLink>
          </Col>
          <Col>
            <h5 className="text-secondary">Social Media</h5>
            <NavLink style={footerStyle} to="#">
              <FontAwesomeIcon icon={faFacebook} /> &nbsp;&nbsp; FaceBook
            </NavLink>
            <NavLink style={footerStyle} to="#">
              <FontAwesomeIcon icon={faTwitter} /> &nbsp;&nbsp; Twitter
            </NavLink>
            <NavLink style={footerStyle} to="#">
              <FontAwesomeIcon icon={faLinkedin} /> &nbsp;&nbsp; Linkedin
            </NavLink>
            <NavLink style={footerStyle} to="#">
              <FontAwesomeIcon icon={faWhatsapp} /> &nbsp;&nbsp; Whatsapp
            </NavLink>
            <NavLink style={footerStyle} to="#">
              <FontAwesomeIcon icon={faTelegramPlane} /> &nbsp;&nbsp; Whatsapp
            </NavLink>
          </Col>
        </Row>
      </Container>
      <h6 className="border-top  text-center text-secondary pt-5">
        Copyright © 2018 Courseware, All rights reservs
      </h6>
    </div>
  );
};

export default Footer;
