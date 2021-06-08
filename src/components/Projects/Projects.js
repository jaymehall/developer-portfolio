import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./projects.css";
import FlipCard from "../FlipCard/FlipCard";
import ProjectDemo from "../ProjectDemo/ProjectDemo";

function Projects({ gitRepURL }) {
  const [showProject, setShowProject] = useState("");

  return (
    <div id="viewWork" style={{ position: "relative" }}>
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
          heading="ShowMyShow"
          child1="React"
          child2="JavaScript"
          child3="Material UI"
          child4="Node JS | Express"
          child5="MongoDB"
          child6="https://showmyshow.herokuapp.com/"
          description="Full-Stack, responsive MERN app which allows users to search for events by city and save them to a MongoDB as well as chat with other signed in users in the GreenRoom!"
          gitRepURL="https://github.com/jaymemizelle/show-my-show"
        />
        <FlipCard
          setShowProject={setShowProject}
          className="projectCard"
          heading="eLibrary"
          child1="React"
          child2="JavaScript"
          child3="Material UI"
          child4="Node JS | Express"
          child5="MongoDB"
          child6="https://sleepy-fjord-99481.herokuapp.com/"
          description="Full-Stack, responsive MERN app which allows users to search for books by title and save them to a MongoDB database."
          gitRepURL="https://github.com/jaymemizelle/e-library"
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
          heading="Nom That Burger"
          child1="JavaScript"
          child2="Node JS | Express"
          child3="MySQL"
          child4="Bootstrap | CSS3"
          child5="Handlebars.js"
          child6="https://nom-that-burger.herokuapp.com/"
          description="Allows the user to type in and save their favorite burgers to a MySQL database. User can then devour burgers at will!"
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
          child6="https://jaymemizelle.github.io/travelers-weather-dash/"
          description="Loads a 5-day forecast for any city the user searches for. Cities are stored in client-side storage for the user to return to at will."
          gitRepURL="https://github.com/jaymemizelle/travelers-weather-dash"
        />
      </div>
    </div>
  );
}

export default Projects;
