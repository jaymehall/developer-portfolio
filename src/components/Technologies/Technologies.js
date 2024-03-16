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
                child1="JavaScript | Typescript"
                child2="Angular"
                child3="React | Next.js"
                child4="Bootstrap | Tailwind | Material"
                child5="HTML5 | CSS3 | SASS | jQuery"
                />
                <Box className="techBox"
                icon={faDatabase}
                heading="Back End"
                child1="Java | Spring Boot"
                child2="Ruby on Rails | MVC"
                child3="Node JS / Express"
                child4="MySQL"
                child5="MongoDB"
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
                child1="Maven | JPA"
                child2="Context API | Redux"
                child3="Jenkins"
                child4="AWS | Oauth2"
                child5="Git | Yarn | NPM"/>
            </div>
        </div>
    )
}

export default Technologies;
