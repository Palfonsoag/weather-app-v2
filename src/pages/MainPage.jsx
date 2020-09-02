import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import CityList from "../components/CityList";
import AppFrame from "../components/AppFrame";
import { getCities } from "../utils/serviceCities";

const MainPage = () => {
  const history = useHistory();
  const onClickHandler = useCallback(
    (city, countryCode) => {
      history.push(`/city/${countryCode}/${city}`);
    },
    [history]
  );

  const cities = getCities();
  return (
    <AppFrame>
      <Paper elevation={2}>
        <CityList cities={cities} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
