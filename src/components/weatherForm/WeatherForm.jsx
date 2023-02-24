import Input from "../UIutilities/Input";
import classes from "./WeatherForm.module.scss";
import Weathercontext from "../store/Contextapi";
import { useContext, useRef } from "react";
import { motion } from "framer-motion";
import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WeatherForm = () => {
  const cityRef = useRef();
  const WeatherDataContext = useContext(Weathercontext);

  const submitHandler = (event) => {
    event.preventDefault();
    const collectedCity = cityRef.current.value;
    if (collectedCity === "") {
      toast.error(` please input a city name😒 `, {
        style: {
          width: "200px",
          lineHeightStep: "20px",
          backgroundColor: "#141414",
          fontSize: "15px",
          borderRadius: "6px",
          lineHeight: "20px",
          height: "10px",
          padding: "0",
          margin: "0",
        },
        transition: Flip,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      return;
    } else {
      toast.success(`${collectedCity} weather info loading.. 📩`, {
        style: {
          width: "200px",
          lineHeightStep: "20px",
          backgroundColor: "#141414",
          fontSize: "15px",
          borderRadius: "6px",
          lineHeight: "20px",
          height: "10px",
          padding: "0",
          margin: "0",
        },
        transition: Flip,
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1000,
      });
    }
    WeatherDataContext.onAddCity(collectedCity);
    cityRef.current.value = "";
  };
  return (
    <>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 90 }}
      >
        <form className={classes.forms} action="" onSubmit={submitHandler}>
          <Input
            ref={cityRef}
            value={cityRef}
            input={{
              type: "text",
              placeholder: "search city here ..",
              id: "city input",
              required: "required",
            }}
            className={classes.input}
          />
          <button
            className={classes.button}
            type="submit"
            onSubmit={submitHandler}
          >
            submit
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default WeatherForm;
