import React from "react";
import { useHistory } from "react-router-dom";
import CityList from "../components/CityList";

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
    <div>
      <h2>List of cities</h2>
      <CityList cities={cities} onClickCity={onClickHandler} />
    </div>
  );
};

export default MainPage;
