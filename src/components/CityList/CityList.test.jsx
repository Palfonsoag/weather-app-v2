import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CityList from "./CityList";

const cities = [
  { city: "Caracas", country: "Venezuela", key: 1, countryCode: "VE" },
  { city: "Madrid", country: "Spain", key: 2, countryCode: "ES" },
  { city: "Lisbon", country: "Portugal", key: 3, countryCode: "PT" },
  { city: "Lima", country: "Peru", key: 4, countryCode: "PE" },
  { city: "Cordoba", country: "Argentina", key: 5, countryCode: "AR" },
];

test("CityList renders", async () => {
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={() => {}} />
  );

  const listOfCities = await findAllByRole("button");

  expect(listOfCities).toHaveLength(cities.length);
});

test("CityList click on item", async () => {
  const fnClickOnItem = jest.fn();

  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  );

  const items = await findAllByRole("button");

  fireEvent.click(items[0]);

  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
