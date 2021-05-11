import React from "react";
import { ReactComponent as Figma } from "../assets/svg/figma.svg";

import "./Skills.scss";

const Skills = () => {
  return (
    <ul className="skills__container">
      <li 
        whileHover={{
          scale: 1.1,
          rotateZ: -4
        }}>
        <i className="fab fa-js"></i>
      </li>
      <li
        whileHover={{
          rotateY: 360,
          transition: {
            duration: 0.5
          }
        }}
      >
        <i className="fab fa-sass"></i>
      </li>
      <li
        whileHover={{
          rotate: 180,
          transition: {
            repeat: Infinity,
            ease: "linear",
            duration: 1,
          },
        }}
      >
        <i className="fab fa-react"></i>
      </li>
      <li>
        <Figma as="i"/>
      </li>
    </ul>
  );
};

export default Skills;
