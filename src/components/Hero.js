import React from 'react';
import './Hero.scss';
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
            Hi, I'm <br /> <div class='name__title'>Misael Villaverde</div>
          </h1>
          <h2>FullStack Software Dev at <a href='https://www.hypernovalabs.com' class='hypernova' target='_blank' rel='noreferrer'>HypernovaLabs</a> 🚀</h2>
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
      <div className='scroll' onClick={handleScroll}>
        <span>Portfolio</span>
        <motion.i
          animate={{
            y: 10,
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
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
