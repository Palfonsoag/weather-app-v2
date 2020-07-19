import React from "react";
import "typeface-roboto";
import CityInfo from "./CityInfo";

export const CityExample = () => (
  <CityInfo city="Caracas" country="Venezuela" />
);

export default {
  title: "CityInfo",
  component: CityInfo,
};
