import React from "react";
import { render } from "@testing-library/react";
import WeatherDetails from "./WeatherDetails";

test("WeatherDetails render", async () => {
  const windValue = 10;
  const humidityValue = 80;

  const { findByText } = render(
    <WeatherDetails wind={windValue} humidity={humidityValue} />
  );

  const wind = await findByText(/10/);

  const humidity = await findByText(/80/);

  expect(wind).toHaveTextContent(`Wind: ${windValue} km/h`);
  expect(humidity).toHaveTextContent(`Humidity: ${humidityValue}%`);
});
