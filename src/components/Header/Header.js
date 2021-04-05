import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="bg">
      <div className="layer"></div>
      <div className="logo">
        <FontAwesomeIcon className="iconLogo" icon={faAtom} />
          <p>Source Logic</p>
      </div>
      <div className="headerText">
        <h1 className="name">Jayme Mizelle</h1>
        <p>Software Developer</p>
        <Button className="viewWorkBtn" variant="light">
          View My Work
        </Button>
      </div>
    </div>
  );
}

export default Header;
