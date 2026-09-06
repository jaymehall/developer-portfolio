import React from "react";
import "./Experience.css";
import { Col, Row } from "react-bootstrap";

function Experience() {
  return (
    <div>
      <h2
        id="viewWork"
        style={{ marginTop: "70px", marginLeft: "20px", marginRight: "20px" }}
        className="sectionTitle title"
      >
        Real-World Software Solutions I've Helped Deliver
      </h2>
      <Row style={{justifyContent: "center"}}>
        <Col sm={12} md={5} className="section">
          <h6 style={{ textAlign: "center" }}>
            <a
              style={{ fontWeight: "bold", color: "black" }}
              rel="noreferrer"
              target="_blank"
              href="https://www.tripointsolutions.com/"
            >
              Tripoint Solutions
            </a>
          </h6>
          <p className="experienceDescription">
            As Senior Full Stack Software Developer at Tripoint Solutions supporting the National Institutes of Health, I engineer enterprise applications for NITAAC, a government-wide electronic ordering system processing $4 billion in annual transactions across multiple NIH teams. I rebuilt the finance module's database architecture in Java, Spring Boot, and JPA with strict service layer separation, stored procedure abstractions, and API contracts consumed by multiple downstream teams, and managed schema versioning with Liquibase to enforce zero-downtime, backward-compatible migrations on production financial workflows. I elevated code quality to 95% through test-driven development and resolved critical performance bottlenecks in stored procedures and SQL queries, measurably reducing page load times and API latency. I hold a U.S. Federal Security Clearance and have earned two impact bonuses for contributions to mission-critical systems.
          </p>
        </Col>
        <Col sm={12} md={5} className="section">
          <h6 style={{ textAlign: "center" }}>
            <span style={{ fontWeight: "bold" }}>Belva AI</span>
          </h6>
          <p className="experienceDescription">
            As Lead AI Engineer and Engineering Team Lead at Belva AI, I drove architectural decisions across the platform's React/TypeScript frontend, React Native mobile app, and Python backend. I built a HIPAA-compliant Neo4j knowledge graph from the ground up, including OCR and document extraction, entity schemas, and Graph RAG retrieval over legal and medical case data. I also architected the company's end-to-end AI evaluation harness, a 3-judge LLM-as-a-judge system running 320+ automated evaluations per release as the mandatory go/no-go gate. I cut per-run LLM cost from $340 to $50 and regression runtime from 4 hours to 2 by parallelizing agent and judge execution, and reduced annual AWS and AI infrastructure spend by nearly $40,000, while maintaining SOC 2 compliance across the platform.
          </p>
        </Col>
        {/* <div className="section">
          <h6 style={{ textAlign: "center" }}>
            <a
              style={{ fontWeight: "bold" }}
              rel="noreferrer"
              target="_blank"
              href="https://exwqn-uaaaa-aaaaf-qaeaa-cai.ic0.app/"
            >
              Nuance Dapp
            </a>
          </h6>
          <p>
            A Web3 blogging Dapp built on the Internet Computer Protocol (ICP) blockchain, featuring secure, decentralized identity management via modern cryptographic authentication. I migrated the app to Next.js, enhancing performance, scalability, and maintainability. Users can explore content without logging in or authenticate via Internet Identity or Stoic Wallet.
          </p>
        </div> */}
      </Row>
    </div>
  );
}

export default Experience;
