import React from "react";
import Input from "../UIutilities/Input";
import WeatherDetails from "../weatherDetails/WeatherDetails";
import WeatherInfo from "../WeatherInformation/WeatherInfo";
import classes from "./WeatherBox.module.scss";
import ContextProvider from "../store/contextProvider";

function WeatherBox() {
  return (
    <ContextProvider>
      <main className={classes.weatherbox}>
        <Input />
        <WeatherDetails />
        <WeatherInfo />
      </main>
    </ContextProvider>
  );
}

export default WeatherBox;
