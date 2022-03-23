import React from "react";
import Skills from "./Skills/Skills.jsx";
import ScrollAnimationItem from "react-scroll-fade-animation";
import "./About.scss";

const About = () => {
  return (
    <div id="about" className="about section">
      <ScrollAnimationItem path={"bottom"} duration={800} className="header">
        <h2>ABOUT ME</h2>
      </ScrollAnimationItem>

      <div className="about-wrapper">
        <ScrollAnimationItem
          path={"bottom"}
          duration={1500}
          className="about-about card"
        >
          <p>
            Hi, my name is Danilo (DAH-KNEE-LOW) and im a full-stack web
            developer from Austin, Texas. I completed Springboard's Software
            Engineering Career Track bootcamp where I gained the skills
            necessary to plan, develop, test and deploy full-stack web
            applications. Aside from programming I love to garden, make music
            and play video games. Feel free to connect with me on
            <a src="https://www.linkedin.com/in/danilo-costilla-19554b16a/">
              LinkedIn
            </a>
            I look forward to connecting!
          </p>
        </ScrollAnimationItem>
        <ScrollAnimationItem
          path={"top"}
          duration={1500}
          className="about-skills"
        >
          <Skills />
        </ScrollAnimationItem>
      </div>
    </div>
  );
};

export default About;
