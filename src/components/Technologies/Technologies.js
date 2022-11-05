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
                child5="React"
                />
                <Box className="techBox"
                icon={faDatabase}
                heading="Back End"
                child1="Node JS"
                child2="Express"
                child3="MySQL"
                child4="MongoDB"
                child5="Ruby on Rails"
                />
                <Box className="techBox"
                icon={faServer}
                heading="Blockchain"
                child1="Solidity"
                child2="Web3.js"
                child3="Ether.js | Ethereum"
                child4="Truffle Suite"
                child5="Motoko | Canisters"
                />
                <Box className="techBox"
                icon={faCodeBranch}
                heading="Tools"
                child1="Git | Yarn | NPM"
                child2="Kanban | JIRA | Azure"
                child3="Context API | Redux"
                child4="AWS | Passport | Oauth2"
                child5="Next.j for SEO"/>
            </div>
        </div>
    )
}

export default Technologies;
