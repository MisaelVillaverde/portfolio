import React from "react";
import { data } from "../data";
import Card from "./Card";
import "./Content.scss";

const Content = () => {
  return (
    <section className="content__container">
      {data.map((i) => 
        <Card 
          title={i.title} 
          srcImg={i.srcImg}
          info={i.info}
          link={i.link}
          size={i.size}
        />
      )}
    </section>
  );
};

export default Content;
