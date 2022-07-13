import React, { useEffect, useState } from "react";
import "./index.css";

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
            <h4 className="footter-head">Let's Connect</h4>
          </div>
        )}

        {showButton && (
          <button onClick={scrollToTop} className="back-to-top">
            &#8679;
          </button>
        )}
      </div>
    </>
  );
};

export default Footer;
