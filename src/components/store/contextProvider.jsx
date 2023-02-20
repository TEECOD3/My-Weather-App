import React, { useState, useEffect } from "react";
import Weathercontext from "./Contextapi";
import fetchFomattedData from "../API/apiFetchFormat";

const ContextProvider = (props) => {
  const { children } = props;
  const [CurrentCity, setCurrentCity] = useState("abuja");
  const [collectedData, SetCollectedData] = useState({});
  const [error, SetError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      setTimeout(async () => {
        const data = await fetchFomattedData(CurrentCity);
        SetCollectedData(data);
        setLoading(false);
      }, 1000);
    } catch (error) {
      // console.log(error);
      setLoading(false);
      SetError(true);
    }
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
    Error: error,
  };
  return (
    <Weathercontext.Provider value={weatherData}>
      {children}
    </Weathercontext.Provider>
  );
};

export default ContextProvider;
