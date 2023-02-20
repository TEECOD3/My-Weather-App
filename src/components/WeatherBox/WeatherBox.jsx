import React, { useContext } from "react";
import WeatherDetails from "../weatherDetails/WeatherDetails";
import WeatherInfo from "../WeatherInformation/WeatherInfo";
import classes from "./WeatherBox.module.scss";
import WeatherForm from "../weatherForm/WeatherForm";
import Weathercontext from "../store/Contextapi";
import Weatherboxskeleton from "./Weatherboxskeleton";
import SkeletonDetails from "../weatherDetails/skeletonDetails";

function WeatherBox() {
  const weathercontext = useContext(Weathercontext);
  const loading = weathercontext.loading;
  return (
    <>
      {loading && <Weatherboxskeleton />}
      {!loading && (
        <main className={classes.weatherbox}>
          <WeatherForm />
          <WeatherDetails />
          <WeatherInfo />
        </main>
      )}
    </>
  );
}

export default WeatherBox;
