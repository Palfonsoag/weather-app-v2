import React, { useMemo } from "react";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import ForecastChart from "../components/ForecastChart";
import AppFrame from "../components/AppFrame";
import useCityPage from "../hooks/useCityPage";
import useCityList from "../hooks/useCityList";
import { getCityCode } from "../utils/utils";
import { getCountryNameByCountryCode } from "../utils/serviceCities";

const CityPages = () => {
  const { city, chartData, forecastItemList, countryCode } = useCityPage();
  const cities = useMemo(() => [{ city, countryCode }], [city, countryCode]);

  const { allWeather } = useCityList(cities);

  const weather = allWeather[getCityCode(city, countryCode)];

  const country = countryCode && getCountryNameByCountryCode(countryCode);
  const state = weather && weather.state;
  const temperature = weather && weather.temperature;

  const humidity = weather && weather.humidity;
  const wind = weather && weather.wind;
  return (
    <AppFrame>
      <Grid container justify="center" direction="column" spacing={2}>
        <Grid item container justify="center" alignItems="flex-end" xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid container justify="center" item xs={12}>
          <Weather state={state} temperature={temperature} />

          {humidity && wind && (
            <WeatherDetails humidity={humidity} wind={wind} />
          )}
        </Grid>
        <Grid item>
          {!chartData && !forecastItemList && <LinearProgress />}
        </Grid>
        <Grid xs={12} item>
          {chartData && <ForecastChart data={chartData} />}
        </Grid>
        <Grid xs={12} item>
          {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPages;
