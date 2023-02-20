//https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=460add583d60f7ac623bc126ffcd2205
//https://api.openweathermap.org/data/2.5/onecall?lat=3.75&lon=6.5833&appid=460add583d60f7ac623bc126ffcd2205

//TODO fetching data
const fetchWeatherdata = (city) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=460add583d60f7ac623bc126ffcd2205`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const formatcollectedData = (data) => {
  const {
    main: {
      temp,
      temp_min,
      temp_max,
      feels_like,
      sea_level,
      grnd_level: ground_level,
      pressure,
      humidity,
    },
    weather,
    visibility,
    dt,
    sys: { country, sunrise, sunset },
    timezone,
    name,
    wind: { speed, deg },
  } = data;

  const { main, description, icon } = weather?.[0];

  return {
    ground_level,
    sea_level,
    temp,
    feels_like,
    pressure,
    humidity,
    visibility,
    dt,
    country,
    sunrise,
    sunset,
    timezone,
    name,
    main,
    description,
    icon,
    temp_max,
    temp_min,
    speed,
    deg,
  };
};

const fetchFomattedData = async (city) => {
  const formattedData = await fetchWeatherdata(city).then(formatcollectedData);
  return formattedData;
};

export default fetchFomattedData;
