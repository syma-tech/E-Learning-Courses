import React from "react";
import "./Banner.css";
import { Button, Carousel, Container } from "react-bootstrap";

const Banner = (props) => {
  console.log(props.children);
  return (
    <div className="banner-bg text-center">
      <div className="banner-overlay">
        <Container>
          <h4>Take the world's best courses</h4>
          <h1 className="banner-heading">{props.children}</h1>
          <Button className="btn-regular">Get Started</Button>
          <h2></h2>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
