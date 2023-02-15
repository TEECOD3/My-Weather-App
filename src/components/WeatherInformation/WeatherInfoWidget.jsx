import React from "react";
import classes from "./WeatherInfoWidget.module.scss";

function WeatherInfoWidget(props) {
  const {} = props;
  return (
    <div>
      <div>
        <WiCelsius className={classes.icon} />
        <span>feel like</span>
        <span> 18°</span>
      </div>
    </div>
  );
}

export default WeatherInfoWidget;
