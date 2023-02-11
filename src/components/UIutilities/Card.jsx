import React from "react";
import classes from "./Card.module.scss";

function Card({ children, className }) {
  const customClass = `${classes.card} ${className}`;
  return <section className={customClass}>{children}</section>;
}

export default Card;
