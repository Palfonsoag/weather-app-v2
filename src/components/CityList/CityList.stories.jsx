import React from "react";
import CityList from "./CityList";

const cities = [
  { city: "Caracas", country: "Venezuela", key: 1 },
  { city: "Madrid", country: "Spain", key: 2 },
  { city: "Lisboa", country: "Portugal", key: 3 },
  { city: "Lima", country: "Peru", key: 4 },
];

export const CityListExample = () => <CityList cities={cities} />;

export default {
  title: "CityList",
  component: CityList,
};
