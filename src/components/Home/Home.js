import React from "react";
import AboutUs from "../AboutUS/AboutUs";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import PopularCourses from "../PopularCourses/PopularCourses";

const Home = () => {
  return (
    <div>
      <Banner>
        A Wonderful <span>first</span> "out of learning"
        <span>experience</span> for your child
      </Banner>
      <PopularCourses></PopularCourses>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
