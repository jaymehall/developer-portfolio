
import React from "react";
import "./projectDemo.css";
import burgerGif from "./nomThatBurger.gif";
import cryptoGif from "./cryptoTracker.gif";
import weatherGif from "./weatherDash.gif";
import goTeamGif from "./goTeam.gif";

const gifs = {
  NomThatBurger: burgerGif,
  CryptoTracker: cryptoGif,
  WeatherDash: weatherGif,
  GoTeam: goTeamGif
}

function ProjectDemo({showProject, setShowProject}) {
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
          </dialog>
        )}
      </div>
    );
}

export default ProjectDemo;