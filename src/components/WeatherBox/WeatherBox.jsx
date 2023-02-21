import React, { useContext, useEffect } from "react";
import WeatherDetails from "../weatherDetails/WeatherDetails";
import WeatherInfo from "../WeatherInformation/WeatherInfo";
import classes from "./WeatherBox.module.scss";
import WeatherForm from "../weatherForm/WeatherForm";
import Weathercontext from "../store/Contextapi";
import SkeletonLoader from "../skeleton/skeleton";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function WeatherBox() {
  const weathercontext = useContext(Weathercontext);
  const { loading, error } = weathercontext;

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
      <ToastContainer />
    </>
  );
}

export default WeatherBox;
