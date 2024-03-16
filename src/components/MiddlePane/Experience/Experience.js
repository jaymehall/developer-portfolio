import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div>
      <h2
        id="viewWork"
        style={{ marginTop: "50px", marginLeft: "20px", marginRight: "20px" }}
        className="sectionTitle title"
      >
        Live, Production-Ready Software I've Helped Build
      </h2>
      <div className="experienceContain">
        <div className="section">
          <h5 className="sectionTitle">Web2</h5>
          <h6 style={{ textAlign: "center" }}>
            <a
              style={{ color: "cadetblue", fontWeight: "bold" }}
              rel="noreferrer"
              target="_blank"
              href="https://app.scopestack.io/"
            >
              ScopeStack
            </a>
          </h6>
          <p className="introText">
            Use the link and sign up for a free plan to explore this app. I have
            rebuilt almost this entire front end with React. It was previously
            built with haml files and Ruby on Rails partials before I came on
            Board.
          </p>
        </div>
        <div className="section">
          <h5 className="sectionTitle">Web3</h5>
          <h6 style={{ textAlign: "center" }}>
            <a
              style={{ color: "cadetblue", fontWeight: "bold" }}
              rel="noreferrer"
              target="_blank"
              href="https://exwqn-uaaaa-aaaaf-qaeaa-cai.ic0.app/"
            >
              Nuance Dapp
            </a>
          </h6>
          <p className="introText">
            You can explore this app without logging in or if you have an
            Internet Identity, you can login or register with that, or if you
            have a Stoic Wallet, you can login with that as well. This is a
            blogging Dapp built on Internet Computer Protocol (ICP) Blockchain.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
