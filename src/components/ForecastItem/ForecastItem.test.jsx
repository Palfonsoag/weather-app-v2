import React from "react";
import { render } from "@testing-library/react";
import ForecastItem from "./ForecastItem";

test("ForecastItem render", async () => {
  const weekDayValue = "Monday";
  const hourValue = 10;
  const temperatureValue = 23;

  const { findByText } = render(
    <ForecastItem
      weekDay={weekDayValue}
      hour={hourValue}
      temperature={temperatureValue}
      state="sunny"
    />
  );

  const weekDay = await findByText(/Monday/);
  const hour = await findByText(/10/);
  const temperature = await findByText(/23/);

  expect(weekDay).toHaveTextContent(`${weekDayValue}`);
  expect(hour).toHaveTextContent(`${hourValue}`);
  expect(temperature).toHaveTextContent(`${temperatureValue}`);
});
