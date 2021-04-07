
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
    console.log("clicked");
  };

    return (
      <div>
        {showProject && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={handleShowDialog}
          >
            <img
              className="image"
              src={gifs[showProject]}
              onClick={handleShowDialog}
              alt="none"
            /><span className="closeGif">X</span>
            {/* <a rel="noreferrer" target="_blank" href={gitRepURL}>
              <Button className="viewCodeBtn">View Code</Button>
            </a> */}
          </dialog>
        )}
      </div>
    );
}

export default ProjectDemo;