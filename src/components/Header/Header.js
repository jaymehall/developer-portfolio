import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router} from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <div className="bg">
      {/* <div className="layer"></div> */}
      <div className="logo">
        <FontAwesomeIcon className="iconLogo" icon={faAtom} />
        <p>Source Logic</p>
      </div>
      <div className="headerText">
        <h1 className="name">The Privacy Dev</h1>
        <p>Software Developer</p>
        <Router>
          <Button className="viewWorkBtn" variant="light">
            <HashLink className="viewWork" to="/#viewWork">
              View My Work
            </HashLink>
          </Button>
        </Router>
      </div>
    </div>
  );
}

export default Header;
