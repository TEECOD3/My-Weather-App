import React from "react";

const Weathercontext = React.createContext({
  onAddCity: (city) => {},
  cityData: {},
  loading: "",
  error: "",
});
export default Weathercontext;
