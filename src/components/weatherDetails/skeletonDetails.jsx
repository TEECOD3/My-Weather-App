import React from "react";
import Skeleton from "react-loading-skeleton";
import Card from "../UIutilities/Card";
import classes from "./weatherDetails.module.scss";

const SkeletonDetails = () => {
  return (
    <>
      <Card className={classes.widget_container}>
        <div className={classes.widget_top}>
          <div className={classes.widget_degs}>
            <Skeleton height={500} width={500} />
            <Skeleton height={200} width={200} />
            <Skeleton height={100} width={100} />
            <Skeleton height={200} width={200} />
          </div>
          <div className={classes.widget_img}>
            <Skeleton height={60} width={60} />
          </div>
        </div>
        <div className={classes.widget_bottom}>
          <span>
            <Skeleton height={10} width={10} />
            <Skeleton height={20} width={20} />
          </span>
          <span>
            <Skeleton height={10} width={10} />
            <Skeleton height={20} width={20} />
          </span>
          <span>
            <Skeleton height={10} width={10} />
            <Skeleton height={20} width={20} />
          </span>
          <span>
            <Skeleton height={10} width={10} />
            <Skeleton height={20} width={20} />
          </span>
        </div>
      </Card>
    </>
  );
};

export default SkeletonDetails;
