import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles, Typography, ButtonBase } from "@material-ui/core";

const styles = theme => ({
  root: {
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
            <ButtonBase>
              <Typography>Home</Typography>
            </ButtonBase>
          </Link>
          <Link to="/art" style={{ textDecoration: "none" }}>
          <ButtonBase>
              <Typography>Art</Typography>
            </ButtonBase>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
          <ButtonBase>
              <Typography>About</Typography>
            </ButtonBase>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
          <ButtonBase>
              <Typography color='black'>Contact</Typography>
            </ButtonBase>
          </Link>
        </div>
        <div className={classes.button}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(NavBar);
