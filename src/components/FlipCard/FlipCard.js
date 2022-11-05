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
  child6,
  description,
  gitRepURL
}) {
  return (
    <div className="flipCard">
      <div className="flipCardInner">
        <div className="flipCardFront">
          <Box
            // icon={icon}
            heading={heading}
            child1={child1}
            child2={child2}
            child3={child3}
            child4={child4}
            child5={child5}
            child6={child6}
          />
        </div>
        <div className="flipCardBack">
          <div className="cardBackContent">
            <h5 className="description">{description}</h5>
            {gitRepURL !== "https://github.com/theprivacydev/rails-friends" &&
            gitRepURL !==
              "https://github.com/team-crypto-currency/crypto-investment-tracker" &&
            gitRepURL !== "https://github.com/theprivacydev/blockchain-app" ? (
              <a rel="noreferrer" target="_blank" href={`${child6}`}>
                <Button className="viewSiteBtn" variant="light">
                  Live Site
                </Button>
              </a>
            ) : null}
            {gitRepURL === "https://github.com/theprivacydev/blockchain-app" ? (
              <a rel="noreferrer" target="_blank" href={`${gitRepURL}`}>
              <Button className="viewSiteBtn" variant="light">
                GitHub Repo
              </Button>
            </a>
            ) : (
              <div>
                <Button
                  onClick={() => setShowProject(heading.split(" ").join(""))}
                  className="demoBtn"
                  variant="light"
                >
                  Demo
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
