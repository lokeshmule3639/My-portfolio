import React from "react";
import TechStack from "./TechStack";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import codeImage from "../../assets/coder.svg";
import GitHubCalendar from "react-github-calendar";

const AboutInfo = () => {
  return (
    <div className="about">
      <h1
        style={{
          marginTop: "3rem",
          fontFamily: "Fira Code",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "#32CD30" }}>About</span> Me
      </h1>
      <div className="about-parent">
        <div className="about-text">
          <p style={{ textAlign: "justify" }}>
            Hi people, I am{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              Lawakesh Mule
            </span>{" "}
            from Hyderabad, India. I did my B.Tech in Computer Engineering in 2024
            from{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              STC Faculty of Engineering and Technology, Latur, Maharashtra.
            </span>{" "}
            and currently I'm looking for job{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              And Also I have certification Java Full Stack Development from 
              Tech Mahindra SMART Academy Hyderabad.
            </span>
            .
          </p>
          <br></br>
          <p style={{ textAlign: "justify" }}>
            Apart from developement, some things I like are<br></br>
            <br></br>
            <ul>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Watching movies
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Dancing
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Travelling
              </li>
            </ul>
          </p>
        </div>
        <img
          className="rounded about-image"
          src={codeImage}
          alt="Extra large avatar"
        ></img>
      </div>
      <TechStack />
      <h1
        style={{
          marginTop: "3rem",
          fontFamily: "Fira Code",
          fontWeight: "bold",
        }}
      >
        My <span style={{ color: "#32CD30" }}>Github</span> Contribution Graph
      </h1>
      <br></br>
      <div className="github-graph">
        <GitHubCalendar
          style={{ marginBottom: "50px" }}
          username="lokeshmule3639"
          blockMargin={6}
          blockSize={12}
          fontSize={16}
          color={"#32CD30"}
        />
      </div>
    </div>
  );
};

export default AboutInfo;
