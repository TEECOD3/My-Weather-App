import React from "react";
import classes from "./weatherDetails.module.scss";
import Card from "../UIutilities/Card";
import clouds from "../../assets/WeatherIcons/39.png";
import { WiSunrise, WiSunset, WiDaySunny } from "react-icons/wi";
import { motion } from "framer-motion";
function WeatherWid({}) {
  return (
    <Card className={classes.widget_container}>
      <div className={classes.widget_top}>
        <div className={classes.widget_degs}>
          <h1>23°</h1>
          <motion.h3
            initial={{ y: -800 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            abuja , nigeria
          </motion.h3>
          <span>tuesday 31st may 2023 | local time 01:10pm</span>
          <p>cloudy</p>
        </div>
        <div className={classes.widget_img}>
          <img src={clouds} alt="weather image for weather condition" />
        </div>
      </div>
      <div className={classes.widget_bottom}>
        <span>
          <WiSunrise className={classes.icon} />
          <h1>rise: 06:45AM</h1>
        </span>
        <span>
          <WiSunset className={classes.icon} />
          <h1>Set: 07:35PM</h1>
        </span>
        <span>
          <WiDaySunny className={classes.icon} />
          <h1>high 45°</h1>
        </span>
        <span>
          <WiDaySunny className={classes.icon} />
          <h1> Low 40°</h1>
        </span>
      </div>
    </Card>
  );
}
// #d4d6db

export default WeatherWid;
