import React from "react";
import Card from "../UIutilities/Card";
import WeatherHour from "./WeatherHour";

import classes from "./WeatherHourUpdate.module.scss";

function WeatherHourUpdates({ className }) {
  return (
    <Card className={className}>
      <section className={classes.hourupdates}>
        <h1>hourly updates</h1>
        <div className={classes.hourupdates_feat}>
          <WeatherHour />
          <WeatherHour />
          <WeatherHour />
          <WeatherHour />
        </div>
      </section>
    </Card>
  );
}

export default WeatherHourUpdates;
