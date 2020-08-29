import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPages from "./pages/CityPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [allWeather, setAllWeather] = useState({});

  const onSetAllWeather = useCallback(
    (weatherCity) => {
      setAllWeather((allWeather) => ({ ...allWeather, ...weatherCity }));
    },
    [setAllWeather]
  );
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/main">
          <MainPage onSetAllWeather={onSetAllWeather} allWeather={allWeather} />
        </Route>
        <Route path="/city/:countryCode/:city">
          <CityPages
            allWeather={allWeather}
            onSetAllWeather={onSetAllWeather}
          />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
