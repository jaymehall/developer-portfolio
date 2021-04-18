import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function MiddlePane() {
  return (
    <div className="middleContainer">
      <h2 className="title">Full Stack Developer</h2>
      <div className="middleText">
        <div>
          <h5 className="sectionTitle">Time-Tested Results</h5>
          <p className="introText">
            As a determined individual with an ability to learn quickly, I began
            as a self-taught programmer and went on to graduate from the
            University of Oregon's Full Stack Coding Bootcamp. I use a
            consistent approach to quickly produce effective, clean code with a
            focus on accessibility.
          </p>
        </div>
        <div className="secondSection">
          <h5 className="sectionTitle">Adaptable Team Member</h5>
          <p className="introText">
            As an experienced and efficient communicator, I fit seamlessly into
            any healthy and organized work environment. I have contributed to
            open source projects and collaborated alongside other develpers to
            build responsive, full-stack web applications. I always stay up to
            date on the most relevant frameworks and libraries, so I am
            continuously adding to my repertoire of technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MiddlePane;
