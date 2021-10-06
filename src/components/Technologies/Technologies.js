import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "../Card";
import "./technologies.css";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";

function Technologies () {
    return (
        <div className="middleBg">
            {/* <div className="film"></div> */}
            <div className="wrapper">
                <Box className="techBox"
                icon={faNetworkWired}
                heading="Front end"
                child1="HTML5"
                child2="CSS3 | SASS"
                child3="JavaScript"
                child4="Bootstrap | Tailwind CSS"
                child5="React | Context API"
                />
                <Box className="techBox"
                icon={faDatabase}
                heading="Back End"
                child1="Node JS / Rails"
                child2="Express"
                child3="MySQL"
                child4="MongoDB"
                child5="Handlebars.js"
                />
                <Box className="techBox"
                icon={faServer}
                heading="Deployment"
                child1="Gulp"
                child2="Heroku"
                child3="Netlify"
                child4="Gh Pages"
                child5="GitHub"
                />
                <Box className="techBox"
                icon={faCodeBranch}
                heading="Tools"
                child1="Git"
                child2="Kanban | JIRA"
                child3="Photoshop | Procreate"
                child4="AWS | Passport | Oauth2"
                child5="Salesforce | DNN CMS"/>
            </div>
        </div>
    )
}

export default Technologies;
