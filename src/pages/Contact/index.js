import React from "react";
import image1 from "../../images/contact-image1.png";
import "./index.css";

class Contact extends React.Component {
  render() {
    return (
      <>
        <div className="contact-content">
          <h1>Let's be friend !</h1>
          <img src={image1} className="contact-img123" alt="fff" />
        </div>
      </>
    );
  }
}

export default Contact;
