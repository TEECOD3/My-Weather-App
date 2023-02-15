//https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=460add583d60f7ac623bc126ffcd2205
//https://api.openweathermap.org/data/2.5/onecall?lat=3.75&lon=6.5833&appid=460add583d60f7ac623bc126ffcd2205

const fetchWeatherdata = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=460add583d60f7ac623bc126ffcd2205`
  );
  const data = await res.json();
  return data;
};

const formatcollectedData = (data) => {
  const {
    main: { temp, feels_like, pressure, humidity },
    weather,
    visibility,
    dt,
    sys: { country, sunrise, sunset },
    timezone,
    name,
  } = data;

  const { main, description, icon } = weather[0];

  return {
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
  };
};

const fetchFomattedData = async (city) => {
  const formattedData = await fetchWeatherdata(city).then(formatcollectedData);
  return formattedData;
};

export default fetchFomattedData;
