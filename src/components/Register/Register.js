import "./Register.css";
import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";

const Register = () => {
  return (
    <div className="py-5 px-2 bg-light">
      <Container className="border-3">
        <h2 className="pb-3">Register</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </Form.Group>
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
              <Form.Text className="text-muted">
                The password must be at least twelve characters long, contain
                upper and lower case letters, contain numbers, contain symbols
                like ! " ? $ % ^ &
              </Form.Text>
            </div>
          </Form.Group>
          <div className="d-grid gap-2 mt-5">
            <Button
              className="btn-regular bg-gradient"
              variant="primary"
              size="md"
              type="submit"
            >
              Register Now
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
