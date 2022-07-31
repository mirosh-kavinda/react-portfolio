import React, { useEffect, useState } from "react";
import "./index.css";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineArrowUp,
  AiOutlineCopyright,
} from "react-icons/ai";
const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(
    () => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    },
    [],
    []
  );

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <>
      <div>
        {showButton && (
          <div class=" footer">
            <div className="row ">
              <p className="footter-head col-4 align-self-start mx-5">
                {" "}
                <AiOutlineCopyright /> 2022 MIrosh All Right Reserved
              </p>

              <div className="col-md-auto align-self-center mx-4">
                <AiOutlineInstagram className="mx-2" size={30} />
                <AiOutlineYoutube className="mx-2" size={30} />
                <AiOutlineTwitter className="mx-2" size={30} />
                <AiOutlineLinkedin className="mx-2" size={30} />
              </div>
            </div>
          </div>
        )}
        {showButton && (
          <button onClick={scrollToTop} className="back-to-top col  ">
            Back to Top
            <AiOutlineArrowUp />
          </button>
        )}
      </div>
    </>
  );
};

export default Footer;
