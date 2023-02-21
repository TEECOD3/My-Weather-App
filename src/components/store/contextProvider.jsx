import React, { useState, useEffect } from "react";
import Weathercontext from "./Contextapi";
import fetchFomattedData from "../API/apiFetchFormat";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContextProvider = (props) => {
  const { children } = props;
  const [CurrentCity, setCurrentCity] = useState("abuja");
  const [collectedData, SetCollectedData] = useState({});
  const [error, SetError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(async () => {
      const data =
        (await fetchFomattedData(CurrentCity).catch((err) => {
          if (err) {
            console.log(error);
          }
        })) ?? {};
      SetCollectedData(data);
      setLoading(false);
    }, 1000);

    return () => clearTimeout();
  }, [CurrentCity]);

  const Addcityfunction = (citySelected) => {
    const current = citySelected.toString();
    setCurrentCity(current);
  };

  const weatherData = {
    onAddCity: Addcityfunction,
    cityData: collectedData,
    loading: loading,
    city: CurrentCity,
    error: error,
  };

  return (
    <Weathercontext.Provider value={weatherData}>
      {children}
    </Weathercontext.Provider>
  );
};

export default ContextProvider;
