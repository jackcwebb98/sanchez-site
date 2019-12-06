import React from "react";
import { useState } from "react";
import { withProvider } from "../context/Context";
import useUser from "../context/UserStore";
import axios from "axios";
import {
  TextField,
  makeStyles,
  ButtonBase,
  Typography,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "90vh"
  },
  register: {
    color: "black"
  }
});

function Login(prop) {
  const { names, addUser } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async props => {
    let user = { username, password };
    try {
      await axios.post(`/login`, user).then(e => console.log(e));
      // .then(props.history.push("/admin"));
    } catch (err) {
      alert("Incorrect username or password");
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        onChange={e => setUsername(e.target.value)}
        placeholder="username"
      />
      <TextField
        onChange={e => setPassword(e.target.value)}
        placeholder="password"
      />
      <Button onClick={() => loginUser()}>login</Button>
      <Link
        to="/register"
        className={classes.register}
        style={{ textDecoration: "none" }}
      >
        <ButtonBase disableRipple={true} disabled={true}>
          <Typography>Register</Typography>
        </ButtonBase>
      </Link>
    </div>
  );
}

export default withProvider(Login);
