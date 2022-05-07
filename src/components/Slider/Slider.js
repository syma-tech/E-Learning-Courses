import React from "react";
import "./Slider.css";
import { Button, Card, Carousel, Container } from "react-bootstrap";
import img1 from "../../images/our-teachers_01.jpg";
import img2 from "../../images/our-teachers_02.jpg";
import img3 from "../../images/our-teachers_03.jpg";
import img4 from "../../images/our-teachers_04.jpg";

const Slider = () => {
  return (
    <>
      <h2 className="page-headings mt-5 text-center">Our Students Says</h2>
      <Carousel variant="dark">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Carousel.Item>
            <Card className="text-center border-0 mb-5 pb-5">
              <Card.Body>
                <Card.Text className="fs-5 pt-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque ullam, laboriosam nesciunt totam aut eligendi
                  voluptatibus.
                  <br />
                  Amet dicta veritatis eius officia aperiam dolores,
                  repudiandae, nulla, explicabo voluptate velit nobis.
                  <br />
                  Corporis eaque id sint minus.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 pt-5">
                <Card className="d-flex border-0 flex-row container w-25 justify-content-center align-items-center">
                  <Card.Img
                    variant="top"
                    src={img1}
                    className="rounded-pill w-25"
                  />
                  <Card.Body className="d-flex  flex-column justify-content-center align-items-center">
                    <Card.Title>Student Name</Card.Title>
                    <Card.Text>Top ranker holder</Card.Text>
                  </Card.Body>
                </Card>
              </Card.Footer>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Slider;
