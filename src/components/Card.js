import React from "react";
import "./Card.scss";
import { motion } from "framer-motion";

const Card = ({ title, srcImg, info, link, size }) => {
  return (
    <motion.a
      className={`card__container ${size}`}
      href={link}
      target="_blank"
      rel="noreferrer"
      whileHover={{
        rotateY: 3,
        rotateZ: 1
      }}
    >
      <h2 className="card__title">{title}</h2>
      <img
        src={require(`../assets/img/${srcImg}`).default}
        alt=""
        className="card__image"
      />
      <p className="card__info">{info}</p>
    </motion.a>
  );
};

export default Card;
