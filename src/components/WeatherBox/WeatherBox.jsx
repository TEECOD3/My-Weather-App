import React from "react";
import Input from "../UIutilities/Input";
import WeatherDailyUpdates from "../WeatherDailyUpdate/WeatherDailyUpdates";
import WeatherDetails from "../weatherDetails/WeatherDetails";
import WeatherHourUpdates from "../WeatherHourUpdate/WeatherHourUpdates";
import classes from "./WeatherBox.module.scss";

function WeatherBox() {
  return (
    <main className={classes.weatherbox}>
      <Input />
      <WeatherDetails />
      <WeatherHourUpdates className={classes.weatherhour} />
      <WeatherDailyUpdates className={classes.weatherdaily} />
    </main>
  );
}

export default WeatherBox;
