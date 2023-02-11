import React from "react";
import classes from "./WeatherHour.module.scss";
import { WiSunrise } from "react-icons/wi";

function WeatherHour() {
  return (
    <div className={classes.weatherblock}>
      <span className={classes.weatherblock_degs}>23°</span>
      <WiSunrise className={classes.icon} />
      <span className={classes.weatherblock_time}>12:00</span>
      <span className={classes.weatherblock_period}>pm</span>
    </div>
  );
}

export default WeatherHour;
