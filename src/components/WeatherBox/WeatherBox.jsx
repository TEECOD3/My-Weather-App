import React, { useContext } from "react";
import WeatherDetails from "../weatherDetails/WeatherDetails";
import WeatherInfo from "../WeatherInformation/WeatherInfo";
import classes from "./WeatherBox.module.scss";
import WeatherForm from "../weatherForm/WeatherForm";
import Weathercontext from "../store/Contextapi";
import SkeletonLoader from "../skeleton/skeleton";

function WeatherBox() {
  const weathercontext = useContext(Weathercontext);
  const loading = weathercontext.loading;

  const Paragraph = () => {
    return <div className={classes.p}> loading....</div>;
  };

  return (
    <>
      {loading ? (
        <SkeletonLoader />
      ) : (
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
