import React from "react";
import OnlineLessions from "../../images/online-lessons.png";
import { Container } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="bg-light bg-gradient pt-5 ">
      <Container>
        {/* <h2 className="page-headings text-center">About Us</h2> */}
        <div className="d-flex py-4 ">
          <div>
            <h3 className="page-headings p-0">Learn At Your Own Pace</h3>
            <p className="pt-4 lh-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              corporis animi neque quis quas error provident ipsa ut culpa
              placeat maxime nulla, saepe nihil architecto iste dignissimos
              reprehenderit quod. Fugiat necessitatibus odit reprehenderit vitae
              dolorem cumque a rem fuga architecto ipsam, laboriosam placeat
              error iure itaque sint recusandae quasi eveniet explicabo earum
              blanditiis eius iste fugit. Doloremque molestias architecto ad,
              quisquam ex natus incidunt ut?
            </p>
          </div>
          <img src={OnlineLessions} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
