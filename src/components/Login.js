import React, { useEffect, useState, useContext } from "react";
import { Typography, Button } from "@material-ui/core";
import { withProvider } from "../context/Context";
import useUser from "../context/UserStore";
import { checkUser } from "./utils";

function Login(prop) {
  const { names, addUser } = useUser();
  const [loggedInUser, setLoggedInUser] = useState({})

  // useEffect(() => {
  //   CheckUser()
  // },{})

  function login() {

  }

  return (
    <>
      <Button
        onClick={() => {
          console.log(names);
        }}
      >
        Login
      </Button>
      <Button onClick={() => {}}>Anotha one</Button>
    </>
  );
}

export default withProvider(Login);
