import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Boxes from "../Card";
import "./technologies.css"

function Technologies () {
    return (
        <div className="middleBg">
            <div className="film"></div>
            <div className="wrapper">
                <Boxes
                heading1="Front end"
                child1="HTML5"
                child2="CSS3 | SASS"
                child3="JavaScript"
                heading2="Back End"
                child4="Node JS"
                child5="Express"
                child6="MySQL"
                heading3="Deployment"
                child7="Heroku"
                child8="Netlify"
                child9="GitHub"
                />
            </div>
        </div>
    )
}

export default Technologies;
