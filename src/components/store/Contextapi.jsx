import React from "react";

const Weathercontext = React.createContext({
  onAddCity: (city) => {},
  cityData: {},
  loading: "",
  setError: "",
});
export default Weathercontext;
