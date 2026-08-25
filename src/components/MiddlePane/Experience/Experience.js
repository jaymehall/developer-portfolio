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
              style={{ fontWeight: "bold" }}
              rel="noreferrer"
              target="_blank"
              href="https://www.tripointsolutions.com/"
            >
              Tripoint Solutions
            </a>
          </h6>
          <p className="experienceDescription">
            At Tripoint Solutions supporting the NIH, I engineered the enterprise finance module for a federal electronic government ordering platform using Java, Spring Boot, and JPA. I designed strict service layer separation, repository abstractions over stored procedures, and well-defined API contracts that downstream modules depended on. I managed database schema versioning with Liquibase, championed test-driven development to bring code quality to 95%, and identified critical performance bottlenecks in stored procedures and SQL queries that measurably reduced page load times. Earned a U.S. Federal Security Clearance and two impact bonuses for contributions to mission-critical systems.
          </p>
        </Col>
        <Col sm={12} md={5} className="section">
          <h6 style={{ textAlign: "center" }}>
            <a
              style={{ fontWeight: "bold" }}
              rel="noreferrer"
              target="_blank"
              href="https://scopestack.io/?utm_term=scopestack&utm_campaign=branded-and-high-intent-cpq&utm_source=adwords&utm_medium=ppc&hsa_acc=8817741425&hsa_cam=18653863670&hsa_grp=148951896705&hsa_ad=659894493493&hsa_src=g&hsa_tgt=kwd-1711561996522&hsa_kw=scopestack&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GoiiQT3aHlr41lpk6pC1wvhx9aY6c1hp-XHHnFZmVlhFem4GGAFMxpsaAhGPEALw_wcB"
            >
              ScopeStack
            </a>
          </h6>
          <p className="experienceDescription">
            A SaaS platform that automates polished proposals, estimates, and Statements of Work by combining pricing and Level of Effort data. I rebuilt the company's entire frontend in React single-handedly, replacing legacy code with modular, reusable components while preserving the MVC architecture. I built high-performance pricing algorithms in JavaScript that integrated across the application, led the frontend engineering team's technical direction and hiring decisions, and delivered a critical feature for a prospective client that drove $75,000 in new annual revenue.
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
