import React, { Component, useEffect } from "react";
import { init } from "ityped";
import "./Skills.scss";

const Skills = () => {
  const skillsArr = [
    {
      words: [
        {
          text: "const ",
          color: "decl",
        },
        {
          text: "skills ",
          color: "variable",
        },
        {
          text: "= ",
          color: "operator",
        },
        {
          text: "{",
          color: "bracket",
        },
      ],
    },
    {
      words: [
        {
          text: "javaScript",
          color: "variable",
        },
        {
          text: ":",
          color: "operator",
        },
        {
          text: "'advanced',",
          color: "string",
        },
      ],
    },
    {
      words: [
        {
          text: "nodeJS",
          color: "variable",
        },
        {
          text: ":",
          color: "operator",
        },
        {
          text: "'advanced',",
          color: "string",
        },
      ],
    },

    {
      words: [
        {
          text: "expressJS",
          color: "variable",
        },
        {
          text: ":",
          color: "operator",
        },
        {
          text: "'advanced',",
          color: "string",
        },
      ],
    },
    {
      words: [
        {
          text: "reactJS",
          color: "variable",
        },
        {
          text: ":",
          color: "operator",
        },
        {
          text: "'advanced',",
          color: "string",
        },
      ],
    },
    {
      words: [
        {
          text: "postgreSQL",
          color: "variable",
        },
        {
          text: ":",
          color: "operator",
        },
        {
          text: "'advanced',",
          color: "string",
        },
      ],
    },
    {
      words: [
        {
          text: "CSS",
          color: "variable",
        },
        {
          text: ":",
          color: "operator",
        },
        {
          text: "'Intermediate',",
          color: "string",
        },
      ],
    },
    {
      words: [
        {
          text: "HTML",
          color: "variable",
        },
        {
          text: ":",
          color: "operator",
        },
        {
          text: "'Intermediate',",
          color: "string",
        },
      ],
    },
    {
      words: [
        {
          text: "ruby",
          color: "variable",
        },
        {
          text: ":",
          color: "operator",
        },
        {
          text: "'novice',",
          color: "string",
        },
      ],
    },
    {
      words: [
        {
          text: "java",
          color: "variable",
        },
        {
          text: ":",
          color: "operator",
        },
        {
          text: "'novice',",
          color: "string",
        },
      ],
    },
    {
      words: [
        {
          text: "}",
          color: "bracket",
        },
        {
          text: ";",
          color: "string",
        },
      ],
    },

    // {
    //   text: "};",
    // },
  ];

  useEffect(() => {
    let prevDelay = 1;
    let prevLen = 1;

    for (let i = 0; i < skillsArr.length; i++) {
      for (let j = 0; j < skillsArr[i].words.length; j++) {
        const skillEl = document.querySelector(`#skills-${i}${j}`);

        init(skillEl, {
          showCursor: false,
          strings: [skillsArr[i].words[j].text],
          loop: false,
          startDelay: 170 * (j + 1) + prevDelay + prevLen,
          typeSpeed: 40,
        });

        prevLen += skillsArr[i].words[j].text.length * 40;
        prevDelay += 170 * (j + 1);
      }
    }
  }, []);

  return (
    <div className="skills-list">
      {skillsArr.map((val, i) => {
        return (
          <div key={i * 100} className="skills-item">
            {val.words.map((word, idx) => {
              return (
                <h2
                  key={idx}
                  id={`skills-${i}${idx}`}
                  className={`skill-item-${word.color}`}
                ></h2>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
