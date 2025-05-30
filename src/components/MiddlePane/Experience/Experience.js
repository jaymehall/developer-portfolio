import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div>
      <h2
        id="viewWork"
        style={{ marginTop: "70px", marginLeft: "20px", marginRight: "20px" }}
        className="sectionTitle title"
      >
        Live, Production-Ready Software I've Helped Build
      </h2>
      <div className="experienceContain">
        <div className="section experienceSection">
          <h5 className="sectionTitle">Web2</h5>
          <h6 style={{ textAlign: "center" }}>
            <a
              style={{ fontWeight: "bold" }}
              rel="noreferrer"
              target="_blank"
              href="https://app.scopestack.io/"
            >
              ScopeStack
            </a>
          </h6>
          <p className="introText experienceText1">
            This is a SAAS that combines a client/company's pricing and Level of
            Effort data to automatically generate a polished proposal, estimate,
            or Statement of Work. Use the link and sign up for a free plan to
            explore this app, or view it's marketing site{" "}
            <a
              href="https://scopestack.io/?utm_term=scopestack&utm_campaign=branded-and-high-intent-cpq&utm_source=adwords&utm_medium=ppc&hsa_acc=8817741425&hsa_cam=18653863670&hsa_grp=148951896705&hsa_ad=659894493493&hsa_src=g&hsa_tgt=kwd-1711561996522&hsa_kw=scopestack&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GoiiQT3aHlr41lpk6pC1wvhx9aY6c1hp-XHHnFZmVlhFem4GGAFMxpsaAhGPEALw_wcB"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            . I have re-built the majority of this application's front end with
            a front-end framework called React, which improved it's speed and
            usability significantly.
          </p>
        </div>
        <div className="section experienceSection">
          <h5 className="sectionTitle">Web3</h5>
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
          <p className="introText">
            This is a blogging Dapp built on Internet Computer Protocol (ICP)
            Blockchain. You can explore this app without logging in or if you
            have an Internet Identity, you can login or register with that. If
            you have a Stoic Wallet, you can login with that as well.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
