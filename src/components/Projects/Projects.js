import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "../Card";
import "./projects.css"

function Projects () {
    return (
        <div>
            <h2 className="projectsTitle">Projects</h2>
            <div className="projectsContainer">
                <Box className="projectCard"
                heading="Crypto Tracker"
                child1="JavaScript"
                child2="Passport Authentication"
                child3="Tailwind CSS"
                child4="Node JS | Express"
                child5="Handlebars.js"
                />
                <Box className="projectCard"
                heading="Nom That Burger"
                child1="Node JS"
                child2="Express"
                child3="MySQL"
                child4="MongoDB"
                child5="Handlebars.js"
                />
                <Box className="projectCard"
                heading="Weather Dash"
                child1="HTML 5 |CSS3"
                child2= "Bootstrap"
                child3="JavaScript | jQuery"
                child4="OpenWeather API"
                child5="AJAX"
                />
                <Box className="projectCard"
                heading="GoTeam"
                child1="React"
                child2="JavaScript"
                child3="Bootstrap"
                child4="CSS3"
                child5="SASS"/>
            </div>
        </div>
    )
}

export default Projects;