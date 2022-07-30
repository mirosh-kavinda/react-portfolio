import React from "react";
import brandImg from './brand.png';
import {AiOutlinePhone } from 'react-icons/ai';


const Navbar = () => {
  
  
  return (
    <>

      <nav className="navbar navbar-dark bg-black navbar-expand-lg  fixed-top mx-5  ">
        <div className="container-fluid">
          <a className="navbar-brand ms pa-2" href="/">
           <img  src={brandImg} alt='brand logo'/>
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
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-link is-active exact  "  aria-current="page" href="/">
             <h6> Home</h6>
            </a>
            <a className="nav-link isActive  " href="/about">
              <h6> About</h6>
            </a>
            <a className="nav-link  isActive " href="/projects">
               <h6>Blog</h6>
            </a>
            <a className="nav-link isActive  " href="/portfolio">
              <h6>Portfolio</h6>
            </a>
            <a className="nav-link isActive" href="/contact">
            <AiOutlinePhone size={30}/>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;