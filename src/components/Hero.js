import React from 'react';
import './Hero.scss';
import Skills from './Skills';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleScroll = () => {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='hero__container'>
      <div className='ts__container'>
        <motion.div
          className='title__container'
          whileHover={{
            y: -5,
            transition: {
              type: 'spring',
              damping: 0,
              duration: 2,
            },
          }}
        >
          <h1>
            Hi, I'm <br /> <b>Misael Villaverde</b>
          </h1>
          <h2>FullStack Web Developer</h2>
        </motion.div>
        <div className='social__container'>
          <a
            rel='noreferrer'
            href='https://www.github.com/misaelvillaverde'
            target='_blank'
            className='gh'
          >
            <i className='fab fa-github'></i>
          </a>
          <a
            rel='noreferrer'
            href='https://www.linkedin.com/in/misael-villaverde/'
            target='_blank'
            className='linkedin'
          >
            <i className='fab fa-linkedin-in'></i>
          </a>
          <a
            rel='noreferrer'
            href='https://wa.me/50765552598'
            target='_blank'
            className='wa'
          >
            <i className='fab fa-whatsapp'></i>
          </a>
        </div>
      </div>
      <Skills />
      <div className='scroll' onClick={handleScroll}>
        <span>Portfolio</span>
        <motion.i
          animate={{
            y: 10,
          }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            ease: 'easeInOut',
            repeatType: 'reverse',
          }}
          className='fas fa-chevron-down'
        ></motion.i>
      </div>
    </div>
  );
};

export default Hero;
