import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./projects.css";
import FlipCard from "../FlipCard/FlipCard";
import ProjectDemo from "../ProjectDemo/ProjectDemo";

function Projects({gitRepURL}) {
    const [showProject, setShowProject] = useState("")



  return (
    <div id="viewWork" style={{position: "relative"}}>
      <h2 className="projectsTitle">Projects</h2>
      <ProjectDemo setShowProject={setShowProject} showProject={showProject} gitRepURL={gitRepURL}/>
      <div className="projectsContainer">
        <FlipCard setShowProject={setShowProject}
          className="projectCard"
          heading="Crypto Tracker"
          child1="JavaScript"
          child2="Passport Authentication"
          child3="Tailwind CSS"
          child4="Node JS | Express"
          child5="Handlebars.js"
          description="Allows user to sign up, log in, search and save various crypto coins based on current price and indicators."
          gitRepURL="https://github.com/team-crypto-currency/crypto-investment-tracker"
        />

        <FlipCard setShowProject={setShowProject} 
        gitRepURL="https://github.com/jaymemizelle/nom-that-burger"
          className="projectCard"
          heading="Nom That Burger"
          child1="Node JS"
          child2="Express"
          child3="MySQL"
          child4="MongoDB"
          child5="Handlebars.js"
          description="Allows the user to type in and save their favorite burgers to a MySQL database. User can then devour burgers at will!"
        />
        <FlipCard setShowProject={setShowProject}
          className="projectCard"
          heading="Weather Dash"
          child1="HTML 5 |CSS3"
          child2="Bootstrap"
          child3="JavaScript | jQuery"
          child4="OpenWeather API"
          child5="AJAX"
          description="Loads a 5-day forecast for any city the user searches for. Cities are stored in client-side storage for the user to return to at will."
          gitRepURL="https://github.com/jaymemizelle/travelers-weather-dash"
        />
        <FlipCard setShowProject={setShowProject}
          className="projectCard"
          heading="GoTeam"
          child1="React"
          child2="JavaScript"
          child3="Bootstrap"
          child4="CSS3"
          child5="SASS"
          description="React app with simple, intuitive UI allows user to search for teammates by first and last name or by their location."
          gitRepURL="https://github.com/jaymemizelle/goteam"
        />
      </div>
    </div>
  );

}

export default Projects;
