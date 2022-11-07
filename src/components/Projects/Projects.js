import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./projects.css";
import FlipCard from "../FlipCard/FlipCard";
import ProjectDemo from "../ProjectDemo/ProjectDemo";

function Projects({ gitRepURL }) {
  const [showProject, setShowProject] = useState("");

  return (
    <div style={{ position: "relative" }}>
      <h2 className="projectsTitle">Projects</h2>
      <ProjectDemo
        setShowProject={setShowProject}
        showProject={showProject}
        gitRepURL={gitRepURL}
      />
      <div className="projectsContainer">
        <FlipCard
          setShowProject={setShowProject}
          className="projectCard"
          heading="Blockchain App"
          child1="React | Redux"
          child2="JavaScript"
          child3="Solidity"
          child4="Ether.js | Truffle"
          child5="Web3.js"
          child6="#"
          description="This application is designed to build and deploy an ERC20 Token in compliance with EIP standards and to build an Exchange to use the Token."
          gitRepURL="https://github.com/theprivacydev/blockchain-app"
        />
        <FlipCard
          setShowProject={setShowProject}
          className="projectCard"
          heading="Eth Memos"
          child1="React"
          child2="JavaScript"
          child3="Bootstrap"
          child4="Node JS | Express"
          child5="MongoDB"
          child6="https://eth-memos.herokuapp.com/"
          description="This is a basic desktop application designed to allow users to simply create, read, and update memos. BE ADVISED: Long wait times on Live Site"
          gitRepURL="https://github.com/theprivacydev/eth-memos"
        />
        <FlipCard
          setShowProject={setShowProject}
          className="projectCard"
          heading="Crypto Tracker"
          child1="JavaScript | MySQL"
          child2="Passport Authentication"
          child3="Tailwind CSS | CSS3"
          child4="Node JS | Express"
          child5="Handlebars.js"
          child6="https://crypto-investment-tracker.herokuapp.com/"
          description="Full-Stack app that allows user to sign up, log in, search and save various crypto coins to a MySQL database based on the current price and trading indicators."
          gitRepURL="https://github.com/team-crypto-currency/crypto-investment-tracker"
        />
        <FlipCard
          setShowProject={setShowProject}
          className="projectCard"
          heading="Travelers Weather Dash"
          child1="HTML5 | CSS3"
          child2="Bootstrap"
          child3="JavaScript | jQuery"
          child4="OpenWeather API"
          child5="AJAX"
          child6="https://theprivacydev.github.io/travelers-weather-dash/"
          description="Loads a 5-day forecast for any city the user searches for. Cities are stored in client-side storage for the user to return to at will."
          gitRepURL="https://github.com/theprivacydev/travelers-weather-dash"
        />
        <FlipCard
          setShowProject={setShowProject}
          className="projectCard"
          heading="Rails Friends"
          child1="JavaScript"
          child2="React"
          child3="Sqlite3"
          child4="Bootstrap | CSS3"
          child5="Ruby on Rails"
          child6="Not Deployed"
          description="This application is designed to explore the possibility of using Ruby on Rails and React front end framework together to create a fully functional basic CRUD application."
          gitRepURL="https://github.com/theprivacydev/rails-friends"
        />
      </div>
    </div>
  );
}

export default Projects;
