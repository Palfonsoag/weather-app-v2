import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import ForecastChart from "../components/ForecastChart";

const CityPages = () => {
  const city = "Caracas";
  const country = "Venezuela";
  const state = "cloudy";
  const temperature = 20;
  const humidity = 80;
  const wind = 5;
  const data = [
    {
      dayHour: "Mon 18",
      min: 14,
      max: 22,
    },
    {
      dayHour: "Fri 06",
      min: 18,
      max: 27,
    },
    {
      dayHour: "Fri 12",
      min: 18,
      max: 28,
    },
    {
      dayHour: "Fri 18",
      min: 18,
      max: 25,
    },
    {
      dayHour: "Sat 06",
      min: 15,
      max: 22,
    },
    {
      dayHour: "Sat 12",
      min: 12,
      max: 19,
    },
  ];
  const forecastItemList = [
    { hour: 18, state: "sunny", temperature: 17, weekDay: "Monday" },
    { hour: 6, state: "cloud", temperature: 18, weekDay: "Tuesday" },
    { hour: 12, state: "fog", temperature: 18, weekDay: "Wednesday" },
    { hour: 18, state: "cloudy", temperature: 19, weekDay: "Thursday" },
    { hour: 14, state: "rain", temperature: 17, weekDay: "Friday" },
    { hour: 12, state: "rain", temperature: 17, weekDay: "Saturday" },
    { hour: 11, state: "fog", temperature: 15, weekDay: "Sunday" },
  ];
  return (
    <Grid container justify="center" direction="column" spacing={2}>
      <Grid item container justify="center" alignItems="flex-end" xs={12}>
        <CityInfo city={city} country={country} />
      </Grid>
      <Grid container justify="center" item xs={12}>
        <Weather state={state} temperature={temperature} />

        <WeatherDetails humidity={humidity} wind={wind} />
      </Grid>
      <Grid xs={12} item>
        <ForecastChart data={data} />
      </Grid>
      <Grid xs={12} item>
        <Forecast forecastItemList={forecastItemList} />
      </Grid>
    </Grid>
  );
};

export default CityPages;
