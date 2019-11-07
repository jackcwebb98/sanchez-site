import { useEffect, useState } from "react";
import { withProvider } from "../context/Context";
import useUser from "../context/UserStore";
import { checkUser } from "./utils";
import axios from "axios";
import ArtCreator from "./adminPage/ArtCreator";
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core/Button";

function Login(prop) {
  const { names, addUser } = useUser();
  const [username, addUsername] = useState("");
  const [password, addPassword] = useState("");

  useEffect(() => {
    checkUser(); //fix the checkUser endpoint to check if anything is on session, not in the db
  }, []);

  const loginUser = async props => {
    let user = { username, password };
    try {
      await axios.post(`/login`, user).then(props.history.push("/admin"));
    } catch (err) {
      console.log(err);
    }
  };
  // return names ? (
  //   <Redirect to={{ pathname: "/admin" }} />
  // ) : (
  //   <Button>login</Button>
  // );
}

export default withProvider(Login);
