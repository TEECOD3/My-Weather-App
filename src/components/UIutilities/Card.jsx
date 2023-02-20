import React from "react";
import classes from "./Card.module.scss";
import { motion } from "framer-motion";

function Card({ children, className }) {
  const customClass = `${classes.card} ${className}`;
  return (
    <motion.section
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
      className={customClass}
    >
      {children}
    </motion.section>
  );
}

export default Card;
