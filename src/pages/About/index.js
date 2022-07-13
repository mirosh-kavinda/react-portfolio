import React from "react";
import image1 from "../../images/about-image1.png";
import image2 from '../../images/about-image2.png';
import image3 from '../../images/about-image3.png';
import './index.css';

class About extends React.Component {
  render() {
    return (
      <>
        <div clasaName="intro">
          <div className="intro-content">
            <h1>Mirosh Kavinda</h1>
            <p>Full-stack Web developer</p>
            <p>UX Designer based in Jakarta, Indonesia.</p>
            <p>I am designing with a minimal and beautiful design in mind.</p>
            <p>Email me</p>
            <a href="kavindahgm@gmail.com">kavindahgm@gmail.com</a>
            <p>Tools & Skills
            </p>
          </div>
          <img src={image1} alt="image1" className="intro-image"/>
          <div className="content1">
            <p>
            My most recent work stint was with Sprinklr where I designed for some of its core offerings like Social Media Engagement, Social Advertising, Care support and Analytics for big brands with a global reach that helped integrate all their social marketing needs under one roof. Having led the design team for four years in this young, rapidly growing enterprise startup environment - taught me how to balance business goals and engineering constraints as I unrelentingly advocated for the user.
            </p>
          </div>
          <img src={image2} alt="image2" className="content2-image"/>
          <div className="content2">
            <p>I graduated from Symbiosis Institute of Design, India with a degree in User Experience Design. 
              I loved the human-centered design methods and processes I learned in school and applied them to 
              my thesis project with Microsoft R&D, Hyderabad
              I grew up in 7 different states in India and my ability to quickly adjust to new challenges in 
              life comes from that. Owing to my diverse upbringing, I embrace all cultures and try to bring it 
              to the designs I create. I am a movie buff and there’s nothing like relaxing to a good masala Bollywood movie. Food is my second love and I let my nose guide me to the pleasures of the stomach once every weekend.</p>
          </div>
          <img src={image3} alt="image3" className="content3-image"/>
        </div>
      </>
    );
  }
}

export default About;
