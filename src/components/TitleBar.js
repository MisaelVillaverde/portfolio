import React from 'react';
import './TitleBar.css';

const TitleBar = () => {
  return (
    <div className='title-bar__container'>
      <svg
        width='682'
        height='641'
        viewBox='0 0 682 641'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='blob'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M366.999 1.50141C451.164 6.69064 520.063 61.6929 577.707 123.239C633.023 182.299 671.499 253.32 678.368 333.948C685.94 422.817 681.155 521.989 616.956 583.905C553.359 645.24 454.667 645.235 366.999 634.245C290.902 624.705 231.96 576.935 172.729 528.217C103.497 471.272 10.9976 423.128 1.90186 333.948C-7.59054 240.878 59.4283 158.535 128.6 95.5492C194.263 35.7585 278.361 -3.96358 366.999 1.50141Z'
          stroke='black'
        />
      </svg>
      <h1 className='title'>Misael Villaverde.</h1>
      <p className='paragraph'>Web Developer & Graphic Designer</p>
    </div>
  );
};

export default TitleBar;
