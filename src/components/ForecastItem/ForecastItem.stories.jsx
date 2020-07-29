import React from "react";
import ForecastItem from "./ForecastItem";

export const SunnyMonday = () => (
  <ForecastItem state="clear" temperature={23} hour={10} weekDay="Monday" />
);

export default {
  title: "ForecastItem",
  component: ForecastItem,
};
