import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div id="topbar" className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Danilo Costilla
          </a>

          <div className="itemContainer">
            <Mail className="icon" />
            <span>danilo.01@live.com</span>
          </div>
          <div className="itemContainer">
            <a
              onClick={() => {
                window.open("https://github.com/danilo-01/", "_blank");
              }}
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="itemContainer">
            <a
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/danilo-costilla-19554b16a/",
                  "_blank"
                );
              }}
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>

        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
