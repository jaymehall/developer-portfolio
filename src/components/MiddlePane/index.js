import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function MiddlePane() {
  return (
    <div>
      <h2 className="title">Front-end Focused</h2>
      <p className="introText">
        I have contributed to open source projects and worked alongside other
        develpers to build responsive, full-stack web applications. I always
        stay attuned to the newest frameworks and continue adding to my
        repertoire of technologies. Learning is my obsession. Building sleek,
        intuive UIs is my passion.
      </p>
      <div className="middleBg">
        <div className="film"></div>
        <div className="container">
          <div className="techBox">
            <ul>
              <li>Front End</li>
            </ul>
          </div>
          <div className="techBox">
            <ul>
              <li>Back End</li>
            </ul>
          </div>
          <div className="techBox">
            <ul>
              <li>Deployment</li>
            </ul>
          </div>
          <div className="techBox">
            <ul>
              <li>Tools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddlePane;
