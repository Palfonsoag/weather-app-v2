import React from "react";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import CityList from "../components/CityList";
import AppFrame from "../components/AppFrame";

const cities = [
  { city: "Caracas", country: "Venezuela", key: 1, countryCode: "VE" },
  { city: "Madrid", country: "Spain", key: 2, countryCode: "ES" },
  { city: "Lisbon", country: "Portugal", key: 3, countryCode: "PT" },
  { city: "Lima", country: "Peru", key: 4, countryCode: "PE" },
  { city: "Cordoba", country: "Argentina", key: 5, countryCode: "AR" },
];

const MainPage = () => {
  const history = useHistory();
  const onClickHandler = (city, countryCode) => {
    console.log(city, countryCode);
    history.push(`/city/${countryCode}/${city}`);
  };
  return (
    <AppFrame>
      <Paper elevation={2}>
        <CityList cities={cities} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
