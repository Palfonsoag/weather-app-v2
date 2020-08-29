import { useState, useEffect } from "react";
import axios from "axios";
import { getWeatherUrl } from "../utils/urls";
import getAllWeather from "../utils/transform/getAllWeather";
import { getCityCode } from "../utils/utils";

const useCityList = (cities, allWeather, onSetAllWeather) => {
  const [error, setError] = useState(null);
  useEffect(() => {
    cities.forEach(async ({ city, countryCode }) => {
      if (!allWeather[getCityCode(city, countryCode)]) {
        const url = getWeatherUrl({ city, countryCode });

        try {
          onSetAllWeather({
            [getCityCode(city, countryCode)]: {},
          });
          setError(null);
          const response = await axios.get(url);
          const getAllWeatherAux = getAllWeather(response, city, countryCode);

          onSetAllWeather(getAllWeatherAux);
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
      }
    });
  }, [cities, onSetAllWeather, allWeather]);
  return { error, setError };
};

export default useCityList;
