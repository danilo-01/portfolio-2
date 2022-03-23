import React from "react";
import experiences from "./experience.js";
import ScrollAnimationItem from "react-scroll-fade-animation";
import "./Experience.scss";

const Experience = () => {
  return (
    <div id="experience" className="experience section">
      <ScrollAnimationItem path={"bottom"} duration={800} className="header">
        <h2>EXPERIENCE</h2>
      </ScrollAnimationItem>

      <div className="experience-wrapper">
        <div className="experience-wrapper-items">
          {experiences.map((experience, idx) => {
            return (
              <ScrollAnimationItem
                path={idx % 2 == 0 ? "left" : "right"}
                duration={1000}
                className="experience-item card"
              >
                <h2>{experience.title}</h2>
                <div className="experience-item-comp-time">
                  <h3>{experience.company}</h3>
                  <h3>{experience.time}</h3>
                </div>
                <p>{experience.description}</p>
              </ScrollAnimationItem>
            );
          })}
        </div>
        <div className="experience-line"></div>
      </div>
    </div>
  );
};

export default Experience;
