import React, { useContext, useState } from "react";
import classes from "./weatherDetails.module.scss";
import Card from "../UIutilities/Card";
import { WiSunrise, WiSunset, WiDaySunny } from "react-icons/wi";
import { motion } from "framer-motion";
import Weathercontext from "../store/Contextapi";

import fewCloudsday from "../../assets/WeatherIcons/30.png";
import fewCloudsNight from "../../assets/WeatherIcons/29.png";
import clearSkyNight from "../../assets/WeatherIcons/31.png";
import clearSkyDay from "../../assets/WeatherIcons/32.png";
import scatteredCloud from "../../assets/WeatherIcons/26.png";
import brokenCloudsNight from "../../assets/WeatherIcons/27.png";
import brokenCloudsDay from "../../assets/WeatherIcons/28.png";
import showerRain from "../../assets/WeatherIcons/9.png";
import rainDay from "../../assets/WeatherIcons/39.png";
import rainNight from "../../assets/WeatherIcons/45.png";
import thunderstormNight from "../../assets/WeatherIcons/1.png";
import thunderstormDay from "../../assets/WeatherIcons/38.png";
import snowDay from "../../assets/WeatherIcons/41.png";
import snowNight from "../../assets/WeatherIcons/42.png";
import mistNight from "../../assets/WeatherIcons/21.png";
import mistDay from "../../assets/WeatherIcons/34.png";
const weathericons = {
  "01d": clearSkyDay,
  "01n": clearSkyNight,
  "02d": fewCloudsday,
  "02n": fewCloudsNight,
  "03d": scatteredCloud,
  "03n": scatteredCloud,
  "04d": brokenCloudsDay,
  "04n": brokenCloudsNight,
  "09d": showerRain,
  "09n": showerRain,
  "10d": rainDay,
  "10n": rainNight,
  "11d": thunderstormDay,
  "11n": thunderstormNight,
  "13d": snowDay,
  "13n": snowNight,
  "50d": mistDay,
  "50n": mistNight,
};

function WeatherWid(props) {
  const {} = props;

  const WeatherContext = useContext(Weathercontext);
  const {
    temp,
    country,
    description,
    icon,
    name,
    sunrise,
    sunset,
    temp_max,
    temp_min,
    dt,
  } = WeatherContext.cityData;

  const loading = WeatherContext.loading;
  const high = Math.round(temp_max - 273);
  const low = Math.round(temp_min - 273);
  const tempz = Math.round(temp - 273);

  const fulldayFormat = (secs) => {
    const millisecs = secs * 1000;
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const format = new Date(millisecs).toLocaleDateString("en-US", options);
    return format;
  };

  const timeformatter = (secs) => {
    const millisecs = secs * 1000;
    const options = {
      minute: "numeric",
      hour: "numeric",
    };
    const format = new Date(millisecs).toLocaleTimeString("en-US", options);
    return format;
  };

  return (
    <>
      {loading ? (
        <SkeletonTheme baseColor="black" highlightColor="green">
          <SkeletonDetails />
        </SkeletonTheme>
      ) : (
        <Card className={classes.widget_container}>
          <div className={classes.widget_top}>
            <div className={classes.widget_degs}>
              <h1>{tempz}°</h1>

              <motion.h3
                initial={{ y: -800 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 80 }}
              >
                {`${name} ${country}`}
              </motion.h3>
              <span>{`${fulldayFormat(dt)}`}</span>
              <p>{description}</p>
            </div>
            <div className={classes.widget_img}>
              <img
                src={`${weathericons[icon]}`}
                alt="weather image for weather condition"
              />
            </div>
          </div>
          <div className={classes.widget_bottom}>
            <span>
              <WiSunrise className={classes.icon} />
              <h1>rise: {timeformatter(sunrise)}</h1>
            </span>
            <span>
              <WiSunset className={classes.icon} />
              <h1>Set: {timeformatter(sunset)}</h1>
            </span>
            <span>
              <WiDaySunny className={classes.icon} />
              <h1>high {high}°</h1>
            </span>
            <span>
              <WiDaySunny className={classes.icon} />
              <h1> Low {low}°</h1>
            </span>
          </div>
        </Card>
      )}
    </>
  );
}

export default WeatherWid;
