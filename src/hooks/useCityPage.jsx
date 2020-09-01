import { useEffect, useDebugValue } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getForecastUrl } from "../utils/urls";
import { getCityCode } from "../utils/utils";
import getChartData from "../utils/transform/getChartData";
import getForecastItemList from "../utils/transform/getForecastItemList";

const useCityPage = (chartData, forecastItemList, actions) => {
  const { city, countryCode } = useParams();

  useDebugValue(`useCityPage ${city}`);

  useEffect(() => {
    const getForecast = async () => {
      const url = getForecastUrl({ city, countryCode });
      const cityCode = getCityCode(city, countryCode);
      try {
        const { data } = await axios.get(url);

        const forecast = getChartData(data);

        const forecastList = getForecastItemList(data);

        actions({ type: "SET_CHART_DATA", payload: { [cityCode]: forecast } });
        actions({
          type: "SET_FORECAST_ITEM_LIST",
          payload: { [cityCode]: forecastList },
        });
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
  }, [city, countryCode, chartData, forecastItemList, actions]);

  return { city, countryCode };
};

export default useCityPage;
