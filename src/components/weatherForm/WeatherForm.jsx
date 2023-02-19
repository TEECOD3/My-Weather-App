import Input from "../UIutilities/Input";
import classes from "./WeatherForm.module.scss";
import Weathercontext from "../store/Contextapi";
import { useContext, useRef } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";

const WeatherForm = () => {
  const cityRef = useRef();
  const WeatherDataContext = useContext(Weathercontext);

  const loading = WeatherDataContext.loading;

  const submitHandler = (event) => {
    event.preventDefault();
    const collectedCity = cityRef.current.value;
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
