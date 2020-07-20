import React from "react";
import { render } from "@testing-library/react";
import CityList from "./CityList";

test("CityList renders", async () => {
  const cities = [
    { city: "Caracas", country: "Venezuela", key: 1 },
    { city: "Madrid", country: "Spain", key: 2 },
    { city: "Lisboa", country: "Portugal", key: 3 },
    { city: "Lima", country: "Peru", key: 4 },
  ];

  const { findAllByRole } = render(<CityList cities={cities} />);

  const listOfCities = await findAllByRole("listitem");

  expect(listOfCities).toHaveLength(4);
});
