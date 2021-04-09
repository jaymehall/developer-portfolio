
import React from "react";
import "./projectDemo.css";
import burgerGif from "./nomThatBurger.gif";
import cryptoGif from "./cryptoTracker.gif";
import weatherGif from "./weatherDash.gif";
import goTeamGif from "./goTeam.gif";
import Button from "react-bootstrap/Button";

const gifs = {
  NomThatBurger: burgerGif,
  CryptoTracker: cryptoGif,
  WeatherDash: weatherGif,
  GoTeam: goTeamGif
}

function ProjectDemo({showProject, setShowProject, gitRepURL}) {
  console.log(showProject);
  const handleShowDialog = () => {
    setShowProject("");
  };

    return (
      <div>
        {showProject && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            // onClick={handleShowDialog}
          >
            <img
              className="image"
              src={gifs[showProject]}
              // onClick={handleShowDialog}
              alt="none"
            /><span onClick={handleShowDialog} className="closeGif">X</span>
            <a href={`https://github.com/jaymemizelle/${showProject.split(/(?=[A-Z])/).join("-").toLowerCase()}`} target="_blank">
              <Button className="viewCodeBtn">View Code</Button>
            </a>
          </dialog>
        )}
      </div>
    );
}

export default ProjectDemo;