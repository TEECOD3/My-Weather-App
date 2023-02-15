import React from "react";
import Card from "../UIutilities/Card";
import classes from "./WeatherInfo.module.scss";
import {
  WiCelsius,
  WiUmbrella,
  WiRainMix,
  WiStrongWind,
  WiDayWindy,
  WiHumidity,
} from "react-icons/wi";

function WeatherInfo() {
  return (
    <section className={classes.weather_info}>
      <Card>
        <div className={classes.weather_info__content}>
          <div className={classes.top}>
            <div className={classes.tops}>
              <WiCelsius className={classes.icon} />
              <div className={classes.attr}>
                <span>feel like</span>
                <span> 18°</span>
              </div>
            </div>
            <div className={classes.tops}>
              <WiUmbrella className={classes.icon} />
              <div className={classes.attr}>
                <span>feel like</span>
                <span> 18°</span>
              </div>
            </div>
            <div className={classes.tops}>
              <WiRainMix className={classes.icon} />
              <div className={classes.attr}>
                <span>feel like</span>
                <span> 18°</span>
              </div>
            </div>
          </div>
          <div className={classes.bottom}>
            <div className={classes.bottoms}>
              <WiStrongWind className={classes.icon} />
              <div className={classes.attr}>
                <span>feel like</span>
                <span> 18°</span>
              </div>
            </div>
            <div className={classes.bottoms}>
              <WiHumidity className={classes.icon} />
              <div className={classes.attr}>
                <span>feel like</span>
                <span> 18°</span>
              </div>
            </div>
            <div className={classes.bottoms}>
              <WiDayWindy className={classes.icon} />
              <div className={classes.attr}>
                <span>feel like</span>
                <span> 18°</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default WeatherInfo;
