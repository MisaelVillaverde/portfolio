import React from 'react';
import { ReactComponent as Blob } from '../assets/svg/blob.svg';
import './TitleBar.css';

const TitleBar = () => {
  return (
    <div className='title-bar__container'>
      <Blob className='blob' />
      <div className='title-bar__title'>
        <h1 className='title'>Misael Villaverde.</h1>
        <h2 className='paragraph'>Web Developer & Graphic Designer</h2>
      </div>
    </div>
  );
};

export default TitleBar;
