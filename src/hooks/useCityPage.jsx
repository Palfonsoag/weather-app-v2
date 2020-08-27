import { useEffect, useState, useDebugValue } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getForecastUrl } from "../utils/urls";
import getChartData from "../utils/transform/getChartData";
import getForecastItemList from "../utils/transform/getForecastItemList";

const useCityPage = () => {
  const { city, countryCode } = useParams();
  const [chartData, setChartData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);

  useDebugValue(`useCityPage ${city}`);

  useEffect(() => {
    const getForecast = async () => {
      const url = getForecastUrl({ city, countryCode });

      try {
        const { data } = await axios.get(url);

        const forecast = getChartData(data);
        setChartData(forecast);

        const forecastList = getForecastItemList(data);
        setForecastItemList(forecastList);
      } catch (error) {
        console.log(error);
      }
    };
    getForecast();
  }, [city, countryCode]);

  return { city, chartData, forecastItemList, countryCode };
};

export default useCityPage;
