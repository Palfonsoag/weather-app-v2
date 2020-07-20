import React from "react";
import Weather from "./Weather";

export const WeatherExample = () => <Weather temperature={10} state="cloud" />;

export const WeatherSunny = () => <Weather temperature={10} state="sunny" />;

export default {
  title: "Weather",
  component: Weather,
};
