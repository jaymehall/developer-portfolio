import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Boxes from "../Card";
import "./technologies.css"

function Technologies () {
    return (
        <div className="middleBg">
            <div className="film"></div>
            <div className="wrapper">
                <Boxes className="techBox"
                heading="Front end"
                child1="HTML5"
                child2="CSS3 | SASS"
                child3="JavaScript"
                />
                <Boxes className="techBox"
                heading="Back End"
                child1="Node JS"
                child2="Express"
                child3="MySQL"
                />
                <Boxes className="techBox"
                heading="Deployment"
                child1="Heroku"
                child2="Netlify"
                child3="Gh Pages"/>
                <Boxes className="techBox"
                heading="Tools"
                child1="Git"
                child2="Photoshop"
                child3="Kanban"/>
            </div>
        </div>
    )
}

export default Technologies;
