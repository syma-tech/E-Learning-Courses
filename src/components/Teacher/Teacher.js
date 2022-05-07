import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import img1 from "../../images/our-teachers_01.jpg";
import img2 from "../../images/our-teachers_02.jpg";
import img3 from "../../images/our-teachers_03.jpg";
import img4 from "../../images/our-teachers_04.jpg";

const Teacher = () => {
  return (
    <div>
      <h2 className="page-headings mt-5 text-center">Our Teachers</h2>
      <Container className="mb-5 pb-5">
        <Row xs={1} md={2} className="g-5">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card className="d-flex flex-row">
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title>Melissa Baker</Card.Title>
                  <p>MBA, PhD</p>
                  <hr />
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Teacher;
