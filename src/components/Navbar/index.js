import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  fixed-top bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
           <h3>MK</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-link  exact active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link active " href="about">
              About
            </a>
            <a className="nav-link  active" href="projects">
              Projects
            </a>
            <a className="nav-link  active " href="contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
