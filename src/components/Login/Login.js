import "./Login.css";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="py-5 px-2 bg-light">
      <Container className="border-3">
        <h2 className="pb-3">Login</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicCheckbox">
            <div className="d-flex justify-content-between">
              <Form.Check type="checkbox" label="Remember me " />
              <span className="text-secondary">Lost your password?</span>
            </div>
          </Form.Group>
          <div className="d-grid gap-2 mt-4">
            <Button
              className="btn-regular bg-gradient"
              variant="primary"
              size="md"
              type="submit"
            >
              Log in
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
