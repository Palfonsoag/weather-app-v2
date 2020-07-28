import React from "react";
import WelcomeScreen from "../components/WelcomeScreen";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
import Link from "@material-ui/core/Link";
import { Link as LinkRouter } from "react-router-dom";

const WelcomePage = () => {
  return (
    <WelcomeScreen>
      <Grid container direction="column" justify="center" className="full">
        <div className="highlight">
          <Grid item container xs={12} justify="center" alignItems="center">
            <Grid item>
              <IconContext.Provider value={{ size: "6em" }}>
                <WiDaySunny />
              </IconContext.Provider>
            </Grid>
            <Grid
              container
              item
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h4" color="inherit">
                Weather App
              </Typography>
              <Link
                color="inherit"
                arial-label="menu"
                component={LinkRouter}
                to="/main"
              >
                Get In
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </WelcomeScreen>
  );
};

export default WelcomePage;
