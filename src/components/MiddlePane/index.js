import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import MyPic from "./MyPicSmall.jpg";

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
        <h2 className="title">Full Stack Engineer</h2>
        <div className="middleText">
          <article>
            <h5 className="sectionTitle">Time-Tested Results</h5>
            <div className="introText">
              As an experienced full-stack software engineer, I use a
              consistent approach to quickly produce highly manageable, clean code with a focus on accessibility and scalability. I enjoy using my experience to mentor more junior developers and bridge the gap between business requirements and the research and development team.
            </div>
          </article>
          <article className="secondSection">
            <h5 className="sectionTitle">Deliverable Productivity</h5>
            <div className="introText">
              As an experienced and efficient communicator, I easily adapt to new processes, so I quickly become productive in new development environments. I have maintained a confidential security clearance administered by the US Federal Government, built payment systems for software utilized by the National Institute of Health, and improved the efficiency and productivity of the development process for companies operating at the enterprise level.
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default MiddlePane;
