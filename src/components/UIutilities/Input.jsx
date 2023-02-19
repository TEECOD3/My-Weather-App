import React from "react";
import classes from "./input.module.scss";

const Input = React.forwardRef((props, ref) => {
  const { className } = props;
  return (
    <div className={` ${classes.input}  ${className}`}>
      <input type="text" placeholder="search city here" ref={ref} />
    </div>
  );
});

export default Input;
