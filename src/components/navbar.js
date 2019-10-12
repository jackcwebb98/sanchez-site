import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between"
  },
  links: {
    display: "flex",
    width: "50%",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});

function NavBar(props) {
  const { classes } = props;
  return (
    <>
      <div className={classes.root}>
        <div className={classes.logo}></div>
        <div className={classes.links}>
        <Link to="/" style={{ textDecoration: "none" }}>
            <Button>Home</Button>
          </Link>
          <Link to="/art" style={{ textDecoration: "none" }}>
            <Button>Art</Button>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button>About</Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button>Contact</Button>
          </Link>
          
        </div>
        <div className={classes.button}>
          <Button>Login</Button>
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(NavBar);
