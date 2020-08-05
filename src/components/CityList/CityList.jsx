import React, { useState, useEffect } from "react";
import axios from "axios";
import convertUnits from "convert-units";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Alert from "@material-ui/lab/Alert";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo";
import Weather from "../Weather";

const getCityCode = (city, code) => `${city}-${code}`;

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
          <Weather
            temperature={weather && weather.temperature}
            state={weather && weather.state}
          />
        </Grid>
      </Grid>
    </ListItem>
  );
};

const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setAllWeather] = useState({});
  const [error, setError] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY_WEATHER;
  useEffect(() => {
    cities.forEach(async ({ city, countryCode }) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`;

      try {
        const response = await axios.get(url);
        const { data } = response;
        setError(null);
        const temperature = Number(
          convertUnits(data.main.temp).from("K").to("C").toFixed(0)
        );
        const state = data.weather[0].main.toLowerCase();
        setAllWeather((allWeather) => ({
          ...allWeather,
          [getCityCode(city, countryCode)]: { temperature, state },
        }));
      } catch (error) {
        if (error.response) {
          setError("There was an error in the weather service");
        } else if (error.request) {
          setError(
            "There was an error reaching the service, check your internet connection"
          );
        } else {
          setError("There was an unexpected error");
        }
      }
    });
  }, [cities, apiKey]);
  const renderCityInfo = renderCityAndCountry(onClickCity);
  return (
    <>
      {error && (
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
      <List>
        {cities.map((cityAndCountry) =>
          renderCityInfo(
            cityAndCountry,
            allWeather[
              getCityCode(cityAndCountry.city, cityAndCountry.countryCode)
            ]
          )
        )}
      </List>
    </>
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
