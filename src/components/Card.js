import React from "react";
import "./Card.scss";

const Card = ({ title, srcImg, info, link, size }) => {
  return (
    <a className={`card__container ${size}`} href={link} target="_blank" rel="noreferrer">
      <h2 className="card__title">{title}</h2>
      <img src={require(`../assets/img/${srcImg}`).default} alt="" className="card__image" />
      <p className="card__info">{info}</p>
    </a>
  );
};

export default Card;
