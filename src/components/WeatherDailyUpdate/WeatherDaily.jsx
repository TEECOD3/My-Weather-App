import React, { Fragment } from "react";
import classes from "./Weatherdails.module.scss";
import { WiSunrise } from "react-icons/wi";

function WeatherDaily() {
  return (
    <Fragment>
      <div className={classes.weatherblock}>
        <span className={classes.weatherblock_degs}>23°</span>
        <WiSunrise className={classes.icon} />
        <span className={classes.weatherblock_period}>Mon</span>
      </div>
    </Fragment>
  );
}

export default WeatherDaily;
