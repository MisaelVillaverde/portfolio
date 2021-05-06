import React from 'react';
import './Hero.scss';

const Hero = () => {
  const handleScroll = () => {
    window.scroll({
      top: 0, // cuando tenga lista las cartas vuelvo
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='hero__container'>
      <a
        ref="noreferrer"
        className='title__container'
        href='https://www.linkedin.com/in/misael-villaverde/'
        target='_blank'
      >
        <h1>
          Hi, I'm <br /> <b>Misael Villaverde</b>
        </h1>
        <h2>Web Developer & Graphic Designer</h2>
      </a>
      <div className='scroll' onClick={handleScroll}>
        <span>Scroll to see my projects</span>
        <i class='fas fa-chevron-down'></i>
      </div>
    </div>
  );
};

export default Hero;
