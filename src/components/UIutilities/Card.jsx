import React from "react";
import classes from "./Card.module.scss";
import { motion } from "framer-motion";

function Card({ children, className }) {
  const customClass = `${classes.card} ${className}`;
  return (
    <motion.section
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
      className={customClass}
    >
      {children}
    </motion.section>
  );
}

export default Card;
