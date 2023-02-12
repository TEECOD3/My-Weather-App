import React from "react";
import Card from "../UIutilities/Card";
import WeatherDaily from "./WeatherDaily";
import classes from "./WeatherDaily.module.scss";

function WeatherDailyUpdates({ className }) {
  return (
    <Card className={className}>
      <section className={classes.Dailyupdates}>
        <h1>Daily Forcast</h1>
        <div className={classes.Dailyupdates_feat}>
          <WeatherDaily />
          <WeatherDaily />
          <WeatherDaily />
          <WeatherDaily />
        </div>
      </section>
    </Card>
  );
}

export default WeatherDailyUpdates;
