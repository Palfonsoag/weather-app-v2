import React from "react";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import CityList from "../components/CityList";
import AppFrame from "../components/AppFrame";

const cities = [
  { city: "Caracas", country: "Venezuela", key: 1 },
  { city: "Madrid", country: "Spain", key: 2 },
  { city: "Lisboa", country: "Portugal", key: 3 },
  { city: "Lima", country: "Peru", key: 4 },
];

const MainPage = () => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push("/city");
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
