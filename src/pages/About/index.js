import React from "react";
import image1 from "../../images/about-image1.png";
import image2 from "../../images/about-image3.png";
import "./index.css";
import image3 from '../../images/contact-image1.png';


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
            <img src={image2} alt="image3" className="content3-image" />
          </div>
          <div className="contact-content">
          
            <img src={image3} className="contact-img123" alt="fff" />
          </div>
        </div>
      </>
    );
  }
}

export default About;
