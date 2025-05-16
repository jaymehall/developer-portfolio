import React from "react";
import "./projectDemo.css";
import burgerGif from "./nomThatBurger.gif";
import cryptoGif from "./cryptoTracker.gif";
import weatherGif from "./weatherDash.gif";
import Button from "react-bootstrap/Button";
import showMyShowGif from "./showmyshow.gif";
import eLibraryGif from "./eLibrary.gif";
import ethMemosGif from "./ethMemos.gif";
import railsFriendsGif from "./railsFriends.gif";

const gifs = {
  NomThatBurger: burgerGif,
  CryptoTracker: cryptoGif,
  TravelersWeatherDash: weatherGif,
  ShowMyShow: showMyShowGif,
  eLibrary: eLibraryGif,
  EthMemos: ethMemosGif,
  RailsFriends: railsFriendsGif
};

function ProjectDemo({ showProject, setShowProject, gitRepURL }) {
  const handleShowDialog = () => {
    setShowProject("");
  };

  return (
    <div id="demo">
      {showProject && (
        <dialog className="dialog" style={{ position: "absolute" }} open>
          <img className="image" src={gifs[showProject]} alt="none" />
          <span onClick={handleShowDialog} className="closeGif">
            X
          </span>
          <a
            rel="noreferrer"
            href={`https://github.com/jaymehall/${showProject
              .split(/(?=[A-Z])/)
              .join("-")
              .toLowerCase()}`}
            target="_blank"
          >
            <Button className="viewCodeBtn">View Code</Button>
          </a>
        </dialog>
      )}
    </div>
  );
}

export default ProjectDemo;
