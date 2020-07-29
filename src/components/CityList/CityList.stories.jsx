import React from "react";
import { action } from "@storybook/addon-actions";
import CityList from "./CityList";

const cities = [
  { city: "Caracas", country: "Venezuela", key: 1, countryCode: "VE" },
  { city: "Madrid", country: "Spain", key: 2, countryCode: "ES" },
  { city: "Lisbon", country: "Portugal", key: 3, countryCode: "PT" },
  { city: "Lima", country: "Peru", key: 4, countryCode: "PE" },
  { city: "Cordoba", country: "Argentina", key: 5, countryCode: "AR" },
];

export const CityListExample = () => (
  <CityList cities={cities} onClickCity={action("Click on city")} />
);

export default {
  title: "CityList",
  component: CityList,
};
