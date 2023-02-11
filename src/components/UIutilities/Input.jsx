import React from "react";
import classes from "./input.module.scss";

const Input = () => {
  return (
    <div className={classes.input}>
      <input type="text" placeholder="search city here" />
    </div>
  );
};

export default Input;
