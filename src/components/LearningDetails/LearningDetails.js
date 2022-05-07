import React from "react";
import { Button, Container } from "react-bootstrap";
import OnlineEducations from "../../images/online-education.webp";

const LearningDetails = () => {
  return (
    <div className="bg-light bg-gradient pt-5 ">
      <Container>
        {/* <h2 className="page-headings text-center">About Us</h2> */}
        <div className="d-flex py-4 ">
          <div>
            <h3 className="page-headings p-0 fs-2">What we are</h3>
            <p className="pt-4 lh-lg fs-6 pe-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              corporis animi neque quis quas error provident ipsa ut culpa
              placeat maxime nulla, saepe nihil architecto iste dignissimos
              reprehenderit quod.
              <br />
              <br />
              Fugiat necessitatibus odit reprehenderit vitae dolorem cumque a
              rem fuga architecto ipsam, laboriosam placeat error iure itaque
              sint recusandae quasi eveniet explicabo earum blanditiis eius iste
              fugit. Doloremque molestias architecto ad, quisquam ex natus
              incidunt ut?
            </p>
            <Button className="btn-regular bg-gradient">
              View Our Courses
            </Button>
          </div>
          <img width="50%" src={OnlineEducations} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default LearningDetails;
