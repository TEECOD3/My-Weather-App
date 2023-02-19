import React, { useContext } from "react";
import classes from "./WeatherBox.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/Skeleton.css";

function Weatherboxskeleton() {
  return (
    <>
      <main className={classes.weatherbox}>
        <SkeletonTheme baseColor="black" highlightColor="grey">
          <Skeleton height={80} width={1000} />
          <Skeleton height={250} width={1000} />
          <Skeleton height={250} width={1000} />
        </SkeletonTheme>
      </main>
    </>
  );
}

export default Weatherboxskeleton;
