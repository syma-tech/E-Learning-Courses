import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = (props) => {
  // console.log(props.course);
  const { img, courseFee, name, id } = props.course;
  return (
    <Col>
      <Card className="text-left border rounded-3 shadow-lg  bg-body">
        <Card.Img variant="top" src={img} className="rounded-3" />
        <Card.Body className=" card-body">
          <Card.Title>{name}</Card.Title>
          <Card.Text>Fee : ${courseFee}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/courses/${id}`}>
            <Button className="btn-regular bg-gradient">Add To Cart</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Course;
