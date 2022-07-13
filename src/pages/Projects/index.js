import React from "react";
import "./index.css";
import WebDesign from "./WebDesign";
import MobApp from "./MobApp";
import Freebies from "./Freebies";

class Projects extends React.Component {
  render() {
    return (
      <>
        <div className="project">
          <h1>Our Projects</h1>
          <p>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse1"
              aria-expanded="true"
              aria-controls="collapse1"
            >
              Web Design
            </button>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse2"
              aria-expanded="false"
              aria-controls="collapse2"
            >
              Mobile App Design
            </button>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse3"
              aria-expanded="false"
              aria-controls="collapse3"
            >
              Freebies
            </button>
          </p>

          <div class="collapse.show" id="collapse1">
            <WebDesign />
          </div>
          <div class="collapse" id="collapse2">
            <MobApp />
          </div>
          <div class="collapse" id="collapse3">
            <Freebies />
          </div>
          <div className="contact-me">
            <button
              type="button"
              className=" contact-me-btn btn btn-outline-warning"
            >
              Warning
            </button>
            <h2 className="contact-me-head">Interested working with me</h2>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
