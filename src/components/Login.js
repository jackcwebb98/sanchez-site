import React, { useEffect, useState, useContext } from "react";
import { Button } from "@material-ui/core";
import { withProvider } from "../context/Context";
import useUser from "../context/UserStore";
import { checkUser } from "./utils";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import ArtCreator from './adminPage/ArtCreator'

function Login(prop) {
  const { names, addUser } = useUser();
  const [username, addUsername] = useState("");
  const [password, addPassword] = useState("");

  useEffect(() => {
    checkUser().then(r => addUser(r.data)); //fix the checkUser endpoint to check if anything is on session, not in the db
  }, {});

  const loginUser = async props => {
    let user = { username, password };
    try {
      await axios.post(`/login`, user).then(props.history.push("/admin"));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <TextField
        onChange={e => {
          addUsername(e.target.value);
        }}
        placeholder="username"
      />
      <TextField
        onChange={e => {
          addPassword(e.target.value);
        }}
        placeholder="password"
      />
      <Button
        onClick={() => {
          console.log(username, password);
        }}
      >
        Login
      </Button> */}
      <ArtCreator />
    </>
  );
}

export default withProvider(Login);
