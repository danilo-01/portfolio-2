import React from "react";
import ScrollAnimationItem from "react-scroll-fade-animation";
import "./Project.scss";

const Project = ({ project, id }) => {
  return (
    <ScrollAnimationItem
      path={id % 2 === 0 ? "left" : "right"}
      duration={1000}
      className="project card"
    >
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="project-image">
        <img src={project.url}></img>
      </div>
      <div className="project-buttons">
        <a
          onClick={() => {
            window.open(project.github, "_blank");
          }}
        >
          Github Repository
        </a>
        <a
          onClick={() => {
            window.open(project.deployed, "_blank");
          }}
        >
          View Live
        </a>
      </div>
    </ScrollAnimationItem>
  );
};

export default Project;
