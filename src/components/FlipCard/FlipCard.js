import React from "react";
import Button from "react-bootstrap/Button";
import "./flipCard.css";
import Box from "../Card";



function FlipCard({
  setShowProject,
  icon,
  heading,
  child1,
  child2,
  child3,
  child4,
  child5,
  description,
  gitRepURL
}) {
  return (
    <div className="flipCard">
      <div className="flipCardInner">
        <div className="flipCardFront">
          <Box
            icon={icon}
            heading={heading}
            child1={child1}
            child2={child2}
            child3={child3}
            child4={child4}
            child5={child5}
          />
        </div>
        <div className="flipCardBack">
          <div className="cardBackContent">
            <h5 className="description">{description}</h5>
            <Button onClick={() => setShowProject(heading.split(" ").join(""))} className="demoBtn" variant="light">
              Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
