import React from "react";
import "./Hero.scss";
import Skills from "./Skills";

const Hero = () => {
  const handleScroll = () => {
    window.scroll({
      top: 0, // cuando tenga lista las cartas vuelvo
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero__container">
      <div className="ts__container">
        <div className="title__container">
          <h1>
            Hi, I'm <br /> <b>Misael Villaverde</b>
          </h1>
          <h2>Web Developer & Graphic Designer</h2>
        </div>
        <div className="social__container">
          <a
            rel="noreferrer"
            href="https://www.github.com/misaelvillaverde"
            target="_blank"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/misael-villaverde/"
            target="_blank"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a rel="noreferrer" href="https://wa.me/50765552598" target="_blank">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <Skills />
      <div className="scroll" onClick={handleScroll}>
        <span>Portfolio</span>
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  );
};

export default Hero;
