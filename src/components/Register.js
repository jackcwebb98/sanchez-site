import React from "react";
import { useEffect, useState } from "react";
import { withProvider } from "../context/Context";
import useUser from "../context/UserStore";
import { checkUser } from "./utils";
import axios from "axios";
import ArtCreator from "./adminPage/ArtCreator";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({

});

function Register(prop) {
  const { names, addUser } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = async props => {
    let user = { username, password, firstName, lastName };
    try {
      await axios.post(`/register`, user);
      // .then(props.history.push("/admin"));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <TextField
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
      />
      <TextField
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <TextField
        onChange={e => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <TextField
        onChange={e => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <Button onClick={() => register()}>Register</Button>
    </div>
  );
}

export default withProvider(Register);
