import "./Error.css";
import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import error from "../../images/error.webp";
import { useHistory } from "react-router-dom";

const Error = () => {
  const history = useHistory();
  return (
    <>
      <Card className="bg-dark text-dark border-0 w-100 rounded-0 mt-0">
        <Card.Img src={error} alt="Card image " />
        <Card.ImgOverlay
          className=" bg-gradient 
        d-flex 
        flex-column justify-content-center align-items-center "
        >
          <h1 id="error-heading" className=" pb-4">
            <h1>404!</h1>
          </h1>

          <Card.Title>Sorry, we can't find that page!</Card.Title>
          <Card.Title>
            Don't worry though, everything is STILL AWESOME!
          </Card.Title>

          <Button
            className="btn-regular bg-gradient mt-5"
            onClick={() => history.push(`\home`)}
          >
            Go Back To Home
          </Button>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Error;
