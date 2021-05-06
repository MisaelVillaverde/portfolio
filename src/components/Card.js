import React from 'react';
import './Card.scss';

const Card = ({ title, sourceImage, info }) => {
  return (
    <div className='card__container'>
      <div className='card'>
        <h2 className='card__title'>{title}</h2>
        <img src={sourceImage} alt='' className='card__image' />
        <p className='card__info'>{info}</p>
      </div>
    </div>
  );
};

export default Card;
