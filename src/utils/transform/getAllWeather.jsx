import { getCityCode, toCelsius } from "../utils";
import { validValues } from "../../components/IconState";

const getAllWeather = (response, city, countryCode) => {
  const { data } = response;
  const temperature = Number(toCelsius(data.main.temp));
  const state = validValues.includes(data.weather[0].main.toLowerCase())
    ? data.weather[0].main.toLowerCase()
    : null;
  return {
    [getCityCode(city, countryCode)]: { temperature, state },
  };
};

export default getAllWeather;
