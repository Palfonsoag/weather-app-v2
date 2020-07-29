import React from "react";
import Weather from "./Weather";

export const WeatherExample = () => <Weather temperature={10} state="clouds" />;

export const WeatherSunny = () => <Weather temperature={10} state="clear" />;

export default {
  title: "Weather",
  component: Weather,
};
