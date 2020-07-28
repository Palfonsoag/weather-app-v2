import React from "react";
import ForecastChart from "./ForecastChart";

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

export const ChartExample = () => <ForecastChart data={data} />;

export default {
  title: "ForecastChart",
  component: ForecastChart,
};
