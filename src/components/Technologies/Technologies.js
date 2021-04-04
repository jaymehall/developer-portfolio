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
                child4="Bootstrap | Tailwind CSS"
                child5="React | Context API"
                />
                <Boxes className="techBox"
                heading="Back End"
                child1="Node JS"
                child2="Express"
                child3="MySQL"
                child4="MongoDB"
                child5="Handlebars.js"
                />
                <Boxes className="techBox"
                heading="Deployment"
                child1="Gulp"
                child2="Heroku"
                child3="Netlify"
                child4="Gh Pages"
                child5="DNN .NET CMS"
                />
                <Boxes className="techBox"
                heading="Tools"
                child1="Git"
                child2="Kanban"
                child3="Photoshop | Procreate"
                child4="Firebase | Passport"
                child5="Salesforce | CMS"/>
            </div>
        </div>
    )
}

export default Technologies;
