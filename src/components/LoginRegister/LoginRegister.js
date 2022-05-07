import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Login from "../Login/Login";
import Register from "../Register/Register";

const LoginRegister = () => {
  return (
    <div className=" pb-5 bg-dark  bg-gradient border-bottom-5 border border-light">
      <h1
        style={{ textShadow: "0 0 3px #FFF, 0 0 5px white" }}
        className="text-center page-headings mt-0  fs-1"
      >
        Login Register
      </h1>
      <Container className="mb-5 pb-5">
        <Row xs={1} md={2} className="g-5">
          <Col>
            <Card>
              <Login></Login>
            </Card>
          </Col>
          <Col>
            <Card>
              <Register></Register>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginRegister;
