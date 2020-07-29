import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo";
import Weather from "../Weather";

const renderCityAndCountry = (eventOnClickCity) => (
  cityAndCountry,
  weather
) => {
  const { city, country, key } = cityAndCountry;
  return (
    <ListItem button key={key} onClick={eventOnClickCity}>
      <Grid container justify="center" alignItems="center">
        <Grid item md={9} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={3} xs={12}>
          {weather ? (
            <Weather temperature={weather.temperature} state={weather.state} />
          ) : (
            "No data exist"
          )}
        </Grid>
      </Grid>
    </ListItem>
  );
};

const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setAllWeather] = useState({});
  const apiKey = `8250a74fdc654139b831451a9adcf0a2`;
  useEffect(() => {
    cities.forEach(({ city, country, countryCode }) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`;

      axios.get(url).then((response) => {
        const { data } = response;
        const temperature = data.main.temp;
        const state = data.weather[0].main.toLowerCase();
        setAllWeather((allWeather) => ({
          ...allWeather,
          [`${city}-${country}`]: { temperature, state },
        }));
      });
    });
  }, [cities, apiKey]);
  const renderCityInfo = renderCityAndCountry(onClickCity);
  return (
    <List>
      {cities.map((cityAndCountry) =>
        renderCityInfo(
          cityAndCountry,
          allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]
        )
      )}
    </List>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
