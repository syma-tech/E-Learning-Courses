import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useCourses from "../../hooks/useCourses";
import Course from "../Course/Course";
import "./PopularCourses.css";

const PopularCourses = () => {
  const [courses, setCourses] = useCourses();
  const linkStyle = {
    color: "darkviolet",
    textDecoration: "none",
    display: "block",
    padding: "8px",
    textAlign: "center",
    padding: "50px 0 100px",
  };
  return (
    <Container>
      <h2 className="page-headings">Popular Courses</h2>
      <Row xs={1} md={4} className="g-5">
        {courses.slice(0, 4).map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </Row>
      <NavLink style={linkStyle} to="/courses">
        See All Courses &nbsp;
        <FontAwesomeIcon className="fa-lg" icon={faArrowRightLong} />
      </NavLink>
    </Container>
  );
};

export default PopularCourses;
