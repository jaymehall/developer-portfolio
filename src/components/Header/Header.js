import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <div className="bg">
      <div className="logo">
      </div>
      <div className="headerText">
        <h4 style={{padding: "20px", marginTop: "50px"}}>Software Developer</h4>
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
