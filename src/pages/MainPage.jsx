import React from "react";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import CityList from "../components/CityList";
import AppFrame from "../components/AppFrame";
import { getCities } from "../utils/serviceCities";

const MainPage = ({ allWeather, onSetAllWeather }) => {
  const history = useHistory();
  const onClickHandler = (city, countryCode) => {
    history.push(`/city/${countryCode}/${city}`);
  };

  const cities = getCities();
  return (
    <AppFrame>
      <Paper elevation={2}>
        <CityList
          allWeather={allWeather}
          cities={cities}
          onClickCity={onClickHandler}
          onSetAllWeather={onSetAllWeather}
        />
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
