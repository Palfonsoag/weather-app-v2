import { getCityCode, toCelsius } from "../utils";
import { validValues } from "../../components/IconState";

const getAllWeather = (response, city, countryCode) => {
  const { data } = response;
  const temperature = Number(toCelsius(data.main.temp));
  const humidity = data.main.humidity;
  const wind = data.wind.speed;
  const state = validValues.includes(data.weather[0].main.toLowerCase())
    ? data.weather[0].main.toLowerCase()
    : null;
  return {
    [getCityCode(city, countryCode)]: { temperature, state, humidity, wind },
  };
};

export default getAllWeather;
