import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import MyPic from "./profile.jpg";

function MiddlePane() {
  return (
    <div
      className="middlePaneContain"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <section className="pictureSection" style={{ marginLeft: "15%" }}>
        <img
          alt="Developer's photograph"
          className="myPic rounded-circle"
          style={{
            width: "400px"
          }}
          src={MyPic}
        />
      </section>
      <section className="middleContainer">
        <h2 className="title">FinTech | Healthcare | Legal</h2>
        <div className="middleText">
          <article>
            <h5 className="sectionTitle">Time-Tested Results</h5>
            <div className="introText">
              With 8+ years of production experience, I build enterprise financial systems, SaaS platforms, and AI-powered products that hold up under real scrutiny. I engineered the finance module for a federal government ordering system at the National Institutes of Health that processes $4 billion in annual transactions, and I hold a U.S. Federal Security Clearance. I bring the same rigor to AI. I designed HIPAA-compliant knowledge graph pipelines and a 3-judge LLM evaluation harness that gates every release for a legal-healthcare AI startup. Whether it's a federal agency or a startup shipping AI to production, I build systems where accuracy matters and correctness is not optional.
            </div>
          </article>
          <article className="secondSection">
            <h5 className="sectionTitle">Productive from Day One</h5>
            <div className="introText">
              My FinTech experience spans four roles: federal payment infrastructure, SaaS pricing engines, crypto/Web3, and AI-powered financial data systems. That breadth means I ramp up fast in unfamiliar domains and turn business requirements into working systems from day one. On the AI side, that means architecting multi-agent pipelines on AWS Bedrock, standing up SOC 2-compliant engineering processes, and owning LLM cost and observability across a platform. I'm also an efficient communicator and mentor. I've taught 50+ developers to go from zero coding experience to shipping production-ready applications.
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default MiddlePane;
