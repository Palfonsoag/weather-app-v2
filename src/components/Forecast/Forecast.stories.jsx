import React from "react";
import Forecast from "./Forecast";

const forecastItemList = [
  { hour: 18, state: "sunny", temperature: 17, weekDay: "Monday" },
  { hour: 6, state: "cloud", temperature: 18, weekDay: "Tuesday" },
  { hour: 12, state: "fog", temperature: 18, weekDay: "Wednesday" },
  { hour: 18, state: "cloudy", temperature: 19, weekDay: "Thursday" },
  { hour: 14, state: "rain", temperature: 17, weekDay: "Friday" },
  { hour: 12, state: "rain", temperature: 17, weekDay: "Saturday" },
  { hour: 11, state: "fog", temperature: 15, weekDay: "Sunday" },
];

export const ForecastExample = () => (
  <Forecast forecastItemList={forecastItemList} />
);
export default {
  title: "Forecast",
  component: Forecast,
};
