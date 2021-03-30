import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Boxes from "../Card";

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
        <div className="wrapper">
          <Boxes heading1="Front end" child1="HTML5" child2="CSS3 | SASS" child3="JavaScript" heading2="Back End" child4="Node JS" child5="Express" child6="MySQL" heading3="Deployment" child7="Heroku" child8="Netlify" child9="GitHub"/>
        </div>
      </div>
    </div>
  );
}

export default MiddlePane;
