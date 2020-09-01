import React, { useState, useCallback, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPages from "./pages/CityPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [allWeather, setAllWeather] = useState({});
  const [chartData, setChartData] = useState({});
  const [forecastItemList, setForecastItemList] = useState({});

  const onSetAllWeather = useCallback(
    (weatherCity) => {
      setAllWeather((allWeather) => ({ ...allWeather, ...weatherCity }));
    },
    [setAllWeather]
  );

  const onSetChartData = useCallback(
    (chartDataCity) => {
      setChartData((chartData) => ({ ...chartData, ...chartDataCity }));
    },
    [setChartData]
  );

  const onSetForecastItemList = useCallback(
    (forecastItemListCity) => {
      setForecastItemList((forecastItemList) => ({
        ...forecastItemList,
        ...forecastItemListCity,
      }));
    },
    [setForecastItemList]
  );

  const action = useMemo(
    () => ({ onSetAllWeather, onSetChartData, onSetForecastItemList }),
    [onSetAllWeather, onSetChartData, onSetForecastItemList]
  );
  const data = useMemo(() => ({ allWeather, chartData, forecastItemList }), [
    allWeather,
    chartData,
    forecastItemList,
  ]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/main">
          <MainPage action={action} data={data} />
        </Route>
        <Route path="/city/:countryCode/:city">
          <CityPages data={data} action={action} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
