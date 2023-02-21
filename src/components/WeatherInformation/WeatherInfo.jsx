import React, { useContext } from "react";
import Card from "../UIutilities/Card";
import classes from "./WeatherInfo.module.scss";

import {
  WiMoonrise,
  WiUmbrella,
  WiRainMix,
  WiStrongWind,
  WiDayWindy,
  WiHumidity,
} from "react-icons/wi";
import Weathercontext from "../store/Contextapi";

function WeatherInfo() {
  const weatherinfoctx = useContext(Weathercontext);
  const { sea_level, ground_level, speed, humidity, pressure, feels_like } =
    weatherinfoctx?.cityData;

  if (weatherinfoctx.cityData == {}) {
    weatherinfoctx.setError(true);
  }

  const feel = Math.round(feels_like - 273);

  return (
    <section className={classes.weather_info}>
      <Card className={classes.weather_info_card}>
        <div className={classes.weather_info__content}>
          <div className={classes.top}>
            <div className={classes.tops}>
              <WiMoonrise className={classes.icon} />
              <div className={classes.attr}>
                <span>feels like</span>
                <span>{feel || 0}°</span>
              </div>
            </div>
            <div className={classes.tops}>
              <WiUmbrella className={classes.icon} />
              <div className={classes.attr}>
                <span>sealevel</span>
                <span>{sea_level || 0}hpa</span>
              </div>
            </div>
            <div className={classes.tops}>
              <WiRainMix className={classes.icon} />
              <div className={classes.attr}>
                <span>pressure</span>
                <span> {pressure || 0}hpa</span>
              </div>
            </div>
          </div>
          <div className={classes.bottom}>
            <div className={classes.bottoms}>
              <WiStrongWind className={classes.icon} />
              <div className={classes.attr}>
                <span>wind speed</span>
                <span>{speed || 0}m/s</span>
              </div>
            </div>
            <div className={classes.bottoms}>
              <WiHumidity className={classes.icon} />
              <div className={classes.attr}>
                <span>humidity</span>
                <span>{humidity || 0}%</span>
              </div>
            </div>
            <div className={classes.bottoms}>
              <WiDayWindy className={classes.icon} />
              <div className={classes.attr}>
                <span>groundlevel</span>
                <span>{ground_level || 0}hpa</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default WeatherInfo;
