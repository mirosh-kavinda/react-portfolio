import React, { useEffect, useState } from "react";
import "./index.css";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineArrowUp
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
          <div className="footer">
            <div>
              {/* <p className="footter-head">c 2022 MIrosh  All Right Reserved </p> */}
              <AiOutlineInstagram />
              <AiOutlineYoutube />
              <AiOutlineTwitter />
              <AiOutlineLinkedin />
            </div>
          </div>
        )}
        {showButton && (
          <button onClick={scrollToTop} className="back-to-top">
            Back to Top<AiOutlineArrowUp/>
          </button>
        )}
      </div>
    </>
  );
};

export default Footer;
