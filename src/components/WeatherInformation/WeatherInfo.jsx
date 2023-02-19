import React, { useContext } from "react";
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
import Weathercontext from "../store/Contextapi";
import Skeleton from "react-loading-skeleton";

function WeatherInfo() {
  const weatherinfoctx = useContext(Weathercontext);
  const { sea_level, ground_level, speed, humidity, pressure, feels_like } =
    weatherinfoctx.cityData;

  const loading = weatherinfoctx.loading;
  const feel = Math.round(feels_like - 273);

  return (
    <section className={classes.weather_info}>
      <Card className={classes.weather_info_card}>
        <div className={classes.weather_info__content}>
          <div className={classes.top}>
            <div className={classes.tops}>
              <WiCelsius className={classes.icon} />
              <div className={classes.attr}>
                <span>feels like</span>
                <span>{feel}°</span>
              </div>
            </div>
            <div className={classes.tops}>
              <WiUmbrella className={classes.icon} />
              <div className={classes.attr}>
                <span>sealevel</span>
                <span>{sea_level}hpa</span>
              </div>
            </div>
            <div className={classes.tops}>
              <WiRainMix className={classes.icon} />
              <div className={classes.attr}>
                <span>pressure</span>
                <span> {pressure}hpa</span>
              </div>
            </div>
          </div>
          <div className={classes.bottom}>
            <div className={classes.bottoms}>
              <WiStrongWind className={classes.icon} />
              <div className={classes.attr}>
                <span>wind speed</span>
                <span>{speed}m/s</span>
              </div>
            </div>
            <div className={classes.bottoms}>
              <WiHumidity className={classes.icon} />
              <div className={classes.attr}>
                <span>humidity</span>
                <span>{humidity}%</span>
              </div>
            </div>
            <div className={classes.bottoms}>
              <WiDayWindy className={classes.icon} />
              <div className={classes.attr}>
                <span>groundlevel</span>
                <span>{ground_level}hpa</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default WeatherInfo;
