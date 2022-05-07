import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useCourses from "../../hooks/useCourses";

const CourseDetails = () => {
  const { courseId } = useParams();

  return (
    <Container>
      <h2>Details Course : {courseId}</h2>
      {/* This is only for test */}
    </Container>
  );
};

export default CourseDetails;
