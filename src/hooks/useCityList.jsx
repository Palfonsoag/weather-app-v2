import { useState, useEffect } from "react";
import axios from "axios";
import { getCityCode, toCelsius } from "../utils/utils";
import { getWeatherUrl } from "../utils/urls";

const useCityList = (cities) => {
  const [allWeather, setAllWeather] = useState({});
  const [error, setError] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY_WEATHER;
  useEffect(() => {
    cities.forEach(async ({ city, countryCode }) => {
      const url = getWeatherUrl({ city, countryCode });

      try {
        const response = await axios.get(url);
        const { data } = response;
        setError(null);
        const temperature = Number(toCelsius(data.main.temp));
        const state = data.weather[0].main.toLowerCase();
        setAllWeather((allWeather) => ({
          ...allWeather,
          [getCityCode(city, countryCode)]: { temperature, state },
        }));
      } catch (error) {
        if (error.response) {
          setError("There was an error in the weather service");
        } else if (error.request) {
          setError(
            "There was an error reaching the service, check your internet connection"
          );
        } else {
          setError("There was an unexpected error");
        }
      }
    });
  }, [cities, apiKey]);
  return { allWeather, error, setError };
};

export default useCityList;
