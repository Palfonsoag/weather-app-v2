import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPages from "./pages/CityPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Grid container justify="center" direction="row">
      <Grid item sm={11} xs={12} md={10} lg={8}>
        <Router>
          <Switch>
            <Route exact path="/">
              <WelcomePage />
            </Route>
            <Route exact path="/main">
              <MainPage />
            </Route>
            <Route exact path="/city">
              <CityPages />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </Grid>
    </Grid>
  );
};

export default App;
