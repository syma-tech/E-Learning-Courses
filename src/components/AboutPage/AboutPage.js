import "./AboutPage.css";
import React from "react";
import Banner from "../Banner/Banner";
import { Button, Container } from "react-bootstrap";
import OnlineEducations from "../../images/online-education.webp";
import Slider from "../Slider/Slider";
import LearningDetails from "../LearningDetails/LearningDetails";
import Teacher from "../Teacher/Teacher";

const AboutPage = () => {
  return (
    <div>
      <Banner>About Us</Banner>
      <LearningDetails></LearningDetails>
      <Slider></Slider>
      {/* Students feedback on Slider */}
      <Teacher></Teacher>
      {/* about Teachers on Teacher */}
    </div>
  );
};

export default AboutPage;
