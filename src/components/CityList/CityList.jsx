import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo";
import Weather from "../Weather";

const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry) => {
  const { city, country, key } = cityAndCountry;
  return (
    <li key={key} onClick={eventOnClickCity}>
      <Grid container justify="center" alignItems="center">
        <Grid item md={8}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={4}>
          <Weather temperature={10} state="sunny" />
        </Grid>
      </Grid>
    </li>
  );
};

const CityList = ({ cities, onClickCity }) => {
  const renderCityInfo = renderCityAndCountry(onClickCity);
  return (
    <ul>{cities.map((cityAndCountry) => renderCityInfo(cityAndCountry))}</ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
