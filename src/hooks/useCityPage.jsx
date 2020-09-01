import { useEffect, useDebugValue } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getForecastUrl } from "../utils/urls";
import { getCityCode } from "../utils/utils";
import getChartData from "../utils/transform/getChartData";
import getForecastItemList from "../utils/transform/getForecastItemList";

const useCityPage = (
  chartData,
  forecastItemList,
  onSetChartData,
  onSetForecastItemList
) => {
  const { city, countryCode } = useParams();

  useDebugValue(`useCityPage ${city}`);

  useEffect(() => {
    const getForecast = async () => {
      const url = getForecastUrl({ city, countryCode });
      const cityCode = getCityCode(city, countryCode);
      try {
        const { data } = await axios.get(url);

        const forecast = getChartData(data);
        onSetChartData({ [cityCode]: forecast });

        const forecastList = getForecastItemList(data);
        onSetForecastItemList({ [cityCode]: forecastList });
      } catch (error) {
        console.log(error);
      }
    };
    const code = getCityCode(city, countryCode);
    if (
      chartData &&
      forecastItemList &&
      !chartData[code] &&
      !forecastItemList[code]
    ) {
      getForecast();
    }
  }, [
    city,
    countryCode,
    chartData,
    forecastItemList,
    onSetChartData,
    onSetForecastItemList,
  ]);

  return { city, countryCode };
};

export default useCityPage;
