import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles, Typography, ButtonBase } from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  links: {
    display: "flex",
    width: "50%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    color: "black"
  }
});

function NavBar(props) {
  const { classes } = props;
  return (
    <>
      <div className={classes.root}>
        <div className={classes.logo}></div>
        <div className={classes.links}>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className={classes.button}
          >
            <ButtonBase disableRipple={true}>
              <Typography>Home</Typography>
            </ButtonBase>
          </Link>
          <Link
            to="/art"
            style={{ textDecoration: "none" }}
            className={classes.button}
          >
            <ButtonBase disableRipple={true}>
              <Typography>Art</Typography>
            </ButtonBase>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none" }}
            className={classes.button}
          >
            <ButtonBase disableRipple={true}>
              <Typography>Contact</Typography>
            </ButtonBase>
          </Link>
          <Link
            to="/login"
            style={{ textDecoration: "none" }}
            className={classes.button}
          >
            <ButtonBase disableRipple={true}>
              <Typography>Login</Typography>
            </ButtonBase>
          </Link>
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(NavBar);
