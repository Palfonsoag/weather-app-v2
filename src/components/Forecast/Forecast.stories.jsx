import React from "react";
import Forecast from "./Forecast";

const forecastItemList = [
  { hour: 18, state: "clear", temperature: 17, weekDay: "Monday" },
  { hour: 6, state: "clouds", temperature: 18, weekDay: "Tuesday" },
  { hour: 12, state: "snow", temperature: 18, weekDay: "Wednesday" },
  { hour: 18, state: "clouds", temperature: 19, weekDay: "Thursday" },
  { hour: 14, state: "rain", temperature: 17, weekDay: "Friday" },
  { hour: 12, state: "thunderstorm", temperature: 17, weekDay: "Saturday" },
  { hour: 11, state: "drizzle", temperature: 15, weekDay: "Sunday" },
];

export const ForecastExample = () => (
  <Forecast forecastItemList={forecastItemList} />
);
export default {
  title: "Forecast",
  component: Forecast,
};
