import React from "react";
import image1 from "../../images/about-image1.png";
import image2 from "../../images/about-image3.png";
import "./index.css";
import Contact from "../Contact/index";
class About extends React.Component {
  render() {
    return (
      <>
        <div className="mx-auto about">
          <div>
            <div className="intro-content">
              <h1>Mirosh Kavinda</h1>
              <p>Full-stack Web developer</p>
              <p>UX Designer based in Jakarta, Indonesia.</p>
              <p>I am designing with a minimal and beautiful design in mind.</p>
              <p>Email me</p>
              <a href="kavindahgm@gmail.com">kavindahgm@gmail.com</a>
              <p>Tools & Skills</p>
            </div>
            <img src={image1} alt="image1" className="intro-image" />
            <img src={image2} alt="image3" className="content2-image" />
          </div>
          <div className="contact">
            <Contact />
          </div>
        </div>
      </>
    );
  }
}

export default About;
