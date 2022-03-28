import React from "react";
import Particles from "react-tsparticles";
import COLORS from "../../../../COLORS.js";
import "./Intro.scss";

const Intro = () => {
  return (
    <div id="intro" className="intro">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#ffffff",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "attract",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 100,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: COLORS.main,
            },
            links: {
              color: COLORS.dark,
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 30,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="intro-text-wrapper">
        <div className="intro-name">
          <p>DANILO</p>
          <p>COSTILLA</p>
        </div>
        <div className="intro-job-title">
          <p>Full-Stack Software Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
