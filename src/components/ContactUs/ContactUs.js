import "./ContactUs.css";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container className="text-center">
      <h2 className="page-headings fs-1 text-center">
        Our experts will help you
      </h2>
      <Container className="mx-5 px-5">
        <Form className="mx-5 px-5">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="email" placeholder="Email" className="py-3" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="text" placeholder="Name" className="py-3" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                type="number"
                className="py-3"
                placeholder="Phone Number"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                type="text"
                placeholder="Subject"
                className="py-3"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                placeholder="Your message here"
                rows={5}
              />
            </Form.Group>
          </Row>

          <Form.Group
            className="mb-5 d-flex justify-content-center text-secondary "
            id="formGridCheckbox"
          >
            <Form.Check
              type="checkbox"
              label="I agree to the terms of data processing."
            />
            &nbsp;&nbsp;
            <a href="3" className="text-decoration-none">
              {" "}
              Terms and Conditions
            </a>
          </Form.Group>
          <Button
            variant="primary"
            className=" btn-regular bg-gradient mb-5"
            type="submit"
          >
            SEND A MESSAGE
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default ContactUs;
