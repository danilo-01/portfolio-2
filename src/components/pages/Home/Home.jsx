import React from "react";
import Experience from "./Experience/Experience.jsx";
import Projects from "./Projects/Projects.jsx";
import Contact from "./Contact/Contact";
import About from "./About/About";
import "./Home.scss";
import Intro from "./Intro/Intro.jsx";

const Home = () => {
  return (
    <div className="home">
      {/* Intro section */}
      <Intro />

      {/* About section */}
      <About />

      {/* Experience section */}
      <Experience />

      {/* Projects section */}
      <Projects />

      {/* Contact section */}
      <Contact />
    </div>
  );
};

export default Home;
