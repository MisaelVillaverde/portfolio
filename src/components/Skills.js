import React from "react";
import { motion } from "framer-motion";

import "./Skills.scss";

const Skills = () => {
  return (
    <ul className="skills__container">
      <li>
        <i className="fab fa-js"></i>
      </li>
      <li>
        <i className="fab fa-sass"></i>
      </li>
      <motion.li
        whileHover={{
          rotate: 90,
        }}
      >
        <i className="fab fa-react"></i>
      </motion.li>
    </ul>
  );
};

export default Skills;
