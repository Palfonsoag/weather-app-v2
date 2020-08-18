import React from "react";
import Grid from "@material-ui/core/Grid";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import ForecastChart from "../components/ForecastChart";
import AppFrame from "../components/AppFrame";
import useCityPage from "../hooks/useCityPage";

const CityPages = () => {
  const { city, chartData, forecastItemList } = useCityPage();

  const country = "Venezuela";
  const state = "clouds";
  const temperature = 20;
  const humidity = 80;
  const wind = 5;

  return (
    <AppFrame>
      <Grid container justify="center" direction="column" spacing={2}>
        <Grid item container justify="center" alignItems="flex-end" xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid container justify="center" item xs={12}>
          <Weather state={state} temperature={temperature} />

          <WeatherDetails humidity={humidity} wind={wind} />
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
