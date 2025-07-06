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
            As a Senior Full Stack Developer at Tripoint Solutions supporting the NIH, I contributed to mission-critical federal health initiatives in a secure environment. I engineered the finance module of the application using Java, SQL, and Angular, leading performance optimizations that improved system efficiency by 30%. I implemented test-driven development to raise code quality to 95% and drove key improvements across both backend and frontend systems. Awarded two impact bonuses for delivering sustainable, high-impact solutions aligned with Tripoint’s mission.
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
            A SaaS platform that automates polished proposals, estimates, and Statements of Work by combining pricing and Level of Effort data. I rebuilt most of the front end in React, enhancing performance and usability. Key contributions include dynamic document generation, real-time data handling, modular UI components, and migrating legacy code toward a more scalable architecture—laying the groundwork for a future single-page application (SPA).
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
