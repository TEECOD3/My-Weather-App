import React, { useState, useEffect } from "react";
import Weathercontext from "./Contextapi";
import fetchFomattedData from "../API/apiFetchFormat";

const ContextProvider = (props) => {
  const { children } = props;
  const [CurrentCity, setCurrentCity] = useState("abuja");
  const [collectedData, SetCollectedData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      await fetchFomattedData(CurrentCity).then((data) => {
        SetCollectedData(data);
      });
    };
    fetch();
  }, [CurrentCity]);

  console.log(collectedData);
  const Addcityfunction = (citySelected) => {
    setCurrentCity(citySelected);
  };

  const weatherData = {
    onAddCity: Addcityfunction,
    cityData: collectedData,
  };
  return (
    <Weathercontext.Provider value={weatherData}>
      {children}
    </Weathercontext.Provider>
  );
};

export default ContextProvider;
