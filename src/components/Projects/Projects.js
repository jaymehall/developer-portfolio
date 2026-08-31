import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./projects.css";
import FlipCard from "../FlipCard/FlipCard";

function Projects() {
  return (
    <div style={{ position: "relative" }}>
      <h2 className="projectsTitle">Projects</h2>
      <div className="projectsContainer">
        <FlipCard
          className="projectCard"
          heading="LLM Evaluation Harness"
          child1="Python"
          child2="pytest | pytest-asyncio"
          child3="DeepEval"
          child4="Pydantic"
          child5="OpenAI Structured Outputs"
          description="Production LLM evaluation harness: a 3-judge LLM-as-a-judge scoring system (faithfulness, precision, recall) that gates every release with 320+ automated evaluations."
          gitRepURL="https://github.com/jaymehall/llm-evaluation-harness"
        />
        <FlipCard
          className="projectCard"
          heading="Blockchain App"
          child1="React | Redux"
          child2="JavaScript"
          child3="Solidity"
          child4="Ether.js | Truffle"
          child5="Web3.js"
          description="This application is designed to build and deploy an ERC20 Token in compliance with EIP standards and to build an Exchange to use the Token."
          gitRepURL="https://github.com/jaymehall/blockchain-app"
        />
        <FlipCard
          className="projectCard"
          heading="Iron Mind"
          child1="React Native"
          child2="Python"
          child3="Microservices"
          child4="Docker"
          child5="AI Coaching"
          description="IronMind.ai is an AI-powered fitness coaching app for bodybuilders and fitness enthusiasts. Log workouts, analyze meals, and chat with an AI coach from your phone or browser."
          gitRepURL="https://github.com/jaymehall/iron-mind"
        />
        <FlipCard
          className="projectCard"
          heading="Crypto Tracker"
          child1="JavaScript | MySQL"
          child2="Passport Authentication"
          child3="Tailwind CSS | CSS3"
          child4="Node JS | Express"
          child5="Handlebars.js"
          description="Full-Stack app that allows user to sign up, log in, search and save various crypto coins to a MySQL database based on the current price and trading indicators."
          gitRepURL="https://github.com/team-crypto-currency/crypto-investment-tracker"
        />
        <FlipCard
          className="projectCard"
          heading="Rails Friends"
          child1="JavaScript"
          child2="React"
          child3="Sqlite3"
          child4="Bootstrap | CSS3"
          child5="Ruby on Rails"
          description="This application is designed to explore the possibility of using Ruby on Rails and React front end framework together to create a fully functional basic CRUD application."
          gitRepURL="https://github.com/jaymehall/rails-friends"
        />
      </div>
    </div>
  );
}

export default Projects;
