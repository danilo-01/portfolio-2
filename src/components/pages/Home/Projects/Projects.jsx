import React from "react";
import projects from "./projects.js";
import Project from "./Project";
import ScrollAnimationItem from "react-scroll-fade-animation";
import "./projects.scss";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <ScrollAnimationItem path={"bottom"} duration={800} className="header">
        <h2>PROJECTS</h2>
      </ScrollAnimationItem>
      <div className="projects-wrapper">
        {projects.map((project, idx) => {
          return <Project project={project} id={idx} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
