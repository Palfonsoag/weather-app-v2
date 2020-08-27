import { useState, useEffect } from "react";
import axios from "axios";
import { getWeatherUrl } from "../utils/urls";
import getAllWeather from "../utils/transform/getAllWeather";

const useCityList = (cities) => {
  const [allWeather, setAllWeather] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
    cities.forEach(async ({ city, countryCode }) => {
      const url = getWeatherUrl({ city, countryCode });

      try {
        setError(null);
        const response = await axios.get(url);
        const getAllWeatherAux = getAllWeather(response, city, countryCode);
        setAllWeather((allWeather) => ({
          ...allWeather,
          ...getAllWeatherAux,
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
  }, [cities]);
  return { allWeather, error, setError };
};

export default useCityList;
