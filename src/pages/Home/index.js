import React from "react";
import "./index.css";
import Proj1 from "../../images/home-proj1.png";
import Proj2 from "../../images/home-proj2.png";
import Avatar from "../../images/home-image1.png";


class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home">
          <div className="header">
            <h1>Hi i’m Mirosh Kavnda </h1>
            <h4>Full stack Developer</h4>
            <p className="para">
              Full stack Developer based in Sri lanka. I am designing with a
              minimalistic and beautiful websites .
            </p>
          </div>
          <img src={Avatar} className="image1" alt="fff" />
          <div className="bio">
            <div className="proj">
              <h2>Recent Projects</h2>
              <div className="proj-content">
                <img src={Proj1} className="proj1" alt="fff" />
                <img src={Proj2} className="proj2" alt="fff" />
              </div>
            </div>
          </div>
          <div className="contact-me1">
            <div className="contact-btn">
              <a type="button" href='/contact' className="btn button1">
               Email Me
              </a>
              <a type="button" href="/portfolio" className="btn btn-outline-dark button2">
              See More Projects
              </a>
            </div>
            <h2 className="contact-me-head">Interested working with me</h2>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
