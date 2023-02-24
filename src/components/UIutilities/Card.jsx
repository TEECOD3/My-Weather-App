import React from "react";
import classes from "./Card.module.scss";
import { motion } from "framer-motion";

function Card({ children, className }) {
  const customClass = `${classes.card} ${className}`;
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ delay: 0.3, type: "tween", stiffness: 100 }}
      className={customClass}
    >
      {children}
    </motion.section>
  );
}

export default Card;
