import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPages from "./pages/CityPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const initialValue = {
    allWeather: {},
    chartData: {},
    forecastItemList: {},
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_ALL_WEATHER":
        const weatherCity = action.payload;
        const newAllWeather = { ...state.allWeather, ...weatherCity };
        return { ...state, allWeather: newAllWeather };

      case "SET_FORECAST_ITEM_LIST":
        const forecastCity = action.payload;
        const newForecastCity = { ...state.forecastItemList, ...forecastCity };
        return { ...state, forecastItemList: newForecastCity };
      case "SET_CHART_DATA":
        const chartCity = action.payload;
        const newChartData = { ...state.chartData, ...chartCity };

        return { ...state, chartData: newChartData };
      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/main">
          <MainPage actions={dispatch} data={state} />
        </Route>
        <Route path="/city/:countryCode/:city">
          <CityPages data={state} actions={dispatch} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
