import React from "react";
import Image from "next/image";
import style from "../styles/Home.module.css";

const Card = ({ title, content, icon }) => {
  return (
    <article className={style.cardContainer}>
      <Image src={icon} alt="icon" height="28" width="28" />
      <hr className={style.hr} />
      <h3 className={style.title}>{title}</h3>
      <p className={style.content}>{content}</p>
    </article>
  );
};

export default Card;
