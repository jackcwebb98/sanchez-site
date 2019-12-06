import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/landing";
import Art from "./components/art";
import Contact from "./components/contact";
import About from "./components/about";
import Login from './components/Login'
import Admin from './components/adminPage/basePage'
import Register from './components/Register'

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path='/art' component={Art} />
    <Route path='/contact' component={Contact} />
    <Route path='/about' component={About} />
    <Route path='/login' component={Login} />
    <Route path='/admin' component={Admin} />
    <Route path='/register' component={Register} />
  </Switch>
);
