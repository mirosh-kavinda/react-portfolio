import React from "react";
import Bio from "../../images/home-image2.png";
import "./index.css";
import Proj1 from "../../images/home-proj1.png";
import Proj2 from '../../images/home-proj2.png'
import Testimonials from "./Testimonial";
import Cards from './Cards';
import  Avatar from '../../images/home-image1.png';

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home">
          <div className="header">
            <h2>Hi i’m Mirosh Kavnda </h2>
            <h3>Full stack Developer</h3>
            <p className="para">
              Full stack Developer based in Sri lanka. I am designing with a
              minimalistic and beautiful websites .
            </p>
            <div className="social">
              <p>Follow Me</p>
            </div>
            <div className="btn_contact">
              <button type="button" className="btn btn-primary">
                Mail Me
              </button>
              <button type="button" className="btn btn-outline-warning">
                Warning
              </button>
            </div>
          </div>
          <img src={Avatar} className="image1" alt="fff" />
          <div className="bio">
            <div className="bio-content">
              <h2>120+</h2>
              <p>completed Projects</p>
              <h2>A+</h2>
              <p>Positive Review's</p>
              <div>
                <h3>Glad to Help You</h3>
                <p className="para">
                  As a full-stack webdeveloper, I work closely with my clients
                  to define,design, and develope transformative user experiences
                  across all pltforms and brand's touch points.
                </p>
              </div>
            </div>
            <img src={Bio} className="bio-image" alt="fff" />

            <div className="proj">
              <h2>
                Recent Projects
                <button type="button" className="btn btn-primary proj-button">
                  Primary
                </button>
              </h2>
              <div className="proj-content">
                <img src={Proj1} className="proj1" alt="fff" />
                <img src={Proj2} className="proj2" alt="fff" />
              </div>
            </div>
           
          </div>
          <div className="whyme">
               <h1>Why Hire me?</h1>
               <Cards/>
          </div>
          
          <div className="contact-me1">
           
            <div className="contact-me-btn">
              
              <button type="button" className="btn btn-primary">
                Primary
              </button>
              <button type="button" className="btn btn-outline-warning">
                Warning
              </button>
            </div>
             <h2 className="contact-me-head">Interested working with me</h2>
          </div>
        
        <div className="testimonials">
          <h1>Testimonials</h1>
          <Testimonials />
        </div>
        </div>

      </>
    );
  }
}

export default Home;
