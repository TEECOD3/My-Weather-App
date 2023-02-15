import React from "react";
import classes from "./input.module.scss";
import { motion } from "framer-motion";

const Input = () => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.7, type: "spring", stiffness: 90 }}
      className={classes.input}
    >
      <input type="text" placeholder="search city here" />
    </motion.div>
  );
};

export default Input;
