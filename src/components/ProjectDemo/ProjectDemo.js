import React, { useState } from "react";
import "./projectDemo.css";

function ProjectDemo() {
  const [ projectDemoState, setProjectDemoState ] = useState({ isOpen: false });

  const handleShowDialog = () => {
    setProjectDemoState({ isOpen: !projectDemoState.isOpen });
    console.log("cliked");
  };

    return (
      <div>
        <img
          className="small"
          src="/Anj.png"
          onClick={handleShowDialog}
          alt="none"
        />
        {projectDemoState.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={handleShowDialog}
          >
            <img
              className="image"
              src={require("./nomThatBurger.gif")}
              onClick={handleShowDialog}
              alt="none"
            />
          </dialog>
        )}
      </div>
    );
}

export default ProjectDemo;