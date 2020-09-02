import React from "react";
import useCityList from "../../hooks/useCityList";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Alert from "@material-ui/lab/Alert";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import { getCityCode } from "../../utils/utils";
import {
  useWeatherDispatchContext,
  useWeatherStateContext,
} from "../../WeatherContext";

const CityListItem = React.memo(
  ({ city, country, countryCode, eventOnClickCity, weather }) => {
    return (
      <ListItem button onClick={() => eventOnClickCity(city, countryCode)}>
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
  }
);

const renderCityAndCountry = (eventOnClickCity) => (
  cityAndCountry,
  weather
) => {
  return (
    <CityListItem
      {...cityAndCountry}
      key={cityAndCountry.key}
      eventOnClickCity={eventOnClickCity}
      weather={weather}
    />
  );
};

const CityList = ({ cities, onClickCity }) => {
  const actions = useWeatherDispatchContext();
  const data = useWeatherStateContext();
  const { allWeather } = data;
  const { error, setError } = useCityList(cities, allWeather, actions);

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

export default React.memo(CityList);
