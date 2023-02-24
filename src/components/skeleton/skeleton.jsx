import React from "react";
import classes from "./skeleton.module.scss";

const SkeletonLoader = (props) => {
  return (
    <div className={classes.skeleton}>
      <div className={classes.skeleton_search}>
        <div className={classes.skeleton_search_top}></div>
        <div className={classes.skeleton_search_button}></div>
      </div>

      <div className={classes.skeleton_details}></div>
      <div className={classes.skeleton_info}></div>
    </div>
  );
};

export default SkeletonLoader;
