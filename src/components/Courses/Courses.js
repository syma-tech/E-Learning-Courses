import "./Courses.css";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Course from "../Course/Course";
import useCourses from "../../hooks/useCourses";

const Courses = () => {
  const [courses, setCourses] = useCourses();
  return (
    <div className="courses pb-3 pt-0">
      <Container className="pb-5 mb-5">
        <h2 className="page-headings mt-0 text-center fs-1">
          Courses Available: {courses.length}
        </h2>
        <Row xs={1} md={3} className="g-5">
          {courses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
