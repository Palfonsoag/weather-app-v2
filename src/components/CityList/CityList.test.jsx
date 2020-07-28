import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CityList from "./CityList";

const cities = [
  { city: "Caracas", country: "Venezuela", key: 1 },
  { city: "Madrid", country: "Spain", key: 2 },
  { city: "Lisboa", country: "Portugal", key: 3 },
  { city: "Lima", country: "Peru", key: 4 },
];

test("CityList renders", async () => {
  const { findAllByRole } = render(<CityList cities={cities} />);

  const listOfCities = await findAllByRole("listitem");

  expect(listOfCities).toHaveLength(4);
});

test("CityList click on item", async () => {
  const fnClickOnItem = jest.fn();

  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  );

  const items = await findAllByRole("listitem");

  fireEvent.click(items[0]);

  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
