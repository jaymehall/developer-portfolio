import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fabConnectDevelop } from '@fortawesome/free-brands-svg-icons';
import 'font-awesome/css/font-awesome.min.css';

function Header() {
  return (
    <div className="bg">
      <div className="layer"></div>
      <div className="logo">
          <img src="./flower.png" alt="flower logo"/>
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
