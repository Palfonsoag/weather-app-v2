import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPages from "./pages/CityPage";
import NotFoundPage from "./pages/NotFoundPage";
import { WeatherContext } from "./WeatherContext";

const App = () => {
  return (
    <WeatherContext>
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route exact path="/main">
            <MainPage />
          </Route>
          <Route path="/city/:countryCode/:city">
            <CityPages />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </WeatherContext>
  );
};

export default App;
