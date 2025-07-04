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
                <Box
                icon={faNetworkWired}
                heading="Front End"
                child1="JavaScript | TypeScript | HTML5"
                child2="React | Next.js | Angular | Vite"
                child3="CSS3 | Sass/SCSS | Tailwind"
                child4="Bootstrap | Material"
                child5="Redux | Context | Jotai"
                />
                <Box
                icon={faDatabase}
                heading="Back End / DB"
                child1="Java | Python | Ruby on Rails"
                child2="Node.js | Express.js"
                child3="ORMs| MVC | RESTful APIs"
                child4="MySQL | PostgreSQL | MongoDB"
                child5="SQLite3 | Redis"
                />
                <Box
                icon={faServer}
                heading="AI / ML"
                child1="OpenAI API | LangChain"
                child2="Retrieval-Augmented Generation (RAG)"
                child3="Agentic Workflows | Prompt Engineering"
                child4="Chain-of-Thought Reasoning"
                child5="Cursor AI"
                />
                <Box
                icon={faCodeBranch}
                heading="Tools"
                child1="Git | GitHub | Bitbucket"
                child2="Maven | Spring Boot | Liquibase"
                child3="Jenkins | CircleCI | Docker | Vercel"
                child4="AWS | Azure | OAuth2"
                child5="Jira | Confluence | VS Code | JetBrains"
                />
            </div>
        </div>
    )
}

export default Technologies;
