import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { IconContext } from "react-icons";
import { WiRain } from "react-icons/wi";
import Link from "@material-ui/core/Link";
import { Link as LinkRouter } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Grid container direction="column" justify="center" className="full">
      <div className="highlight">
        <Grid item container xs={12} justify="center" alignItems="center">
          <Grid item>
            <IconContext.Provider value={{ size: "6em" }}>
              <WiRain />
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
              404 | Page Not Found
            </Typography>
            <Link
              color="inherit"
              arial-label="menu"
              component={LinkRouter}
              to="/main"
            >
              Go Back
            </Link>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default NotFoundPage;
