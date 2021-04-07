import React from "react";
import "./projectDemo.css";
import burgerGif from "./nomThatBurger.gif";

const gifs = {
  NomThatBurger: burgerGif,
  GoTeam: burgerGif
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