import React from "react";
import Particles from "react-tsparticles";
// import Skills from "../../helpers/skills";
import Skills from "./Skills/Skills";

import "./Home.scss";

const Home = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="home">
      <div className="main">
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
                value: "#7F7F7F",
              },
              links: {
                color: "#7f7f7f",
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
        <div className="text-wrapper">
          <div className="name">
            <p>DANILO</p>
            <p>COSTILLA</p>
          </div>
          <div className="job-title">
            <p>Full-Stack Software Developer</p>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="header">
          <h2>SKILLS</h2>
        </div>
        <div className="wrapper">
          <Skills />
          {/* {Skills.map((skill) => {
            return (
              <div className="skill">
                <h3>{skill.name}</h3>
                <div
                  className="progressbar"
                  style={{ width: skill.experience }}
                ></div>
              </div>
            );
          })} */}
        </div>
      </div>
      {/* Experience section */}
      <div className="experience">
        <div className="header">
          <h2>EXPERIENCE</h2>
        </div>
        <div className="wrapper">
          <div className="work">
            <div className="title">
              <h3>Volunteer Software Engineer</h3>
              <h4>Darbe</h4>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae officia ipsum neque distinctio similique voluptas?
                Quisquam at vero aliquam debitis laudantium, ipsum distinctio ex
                quia dicta dolorem, sed iusto delectus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects section */}
      <div className="projects">
        <div className="header">
          <h2>PROJECTS</h2>
        </div>
        <div className="wrapper"></div>
      </div>

      {/* Contact section */}
      <div className="contact">
        <div className="header">
          <h2>CONTACT</h2>
        </div>
        <div className="wrapper"></div>
      </div>
    </div>
  );
};

export default Home;
