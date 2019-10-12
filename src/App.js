import React from "react";
import { HashRouter } from "react-router-dom";
import NavBar from "./components/navbar";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "./themes/defaultTheme";
import { CssBaseline } from "@material-ui/core";
import router from './router'

function App() {
  return (
    <HashRouter>
      <CssBaseline />
      <MuiThemeProvider theme={defaultTheme}>
        <NavBar />
        <div className="App">{router}</div>
      </MuiThemeProvider>
    </HashRouter>
  );
}

export default App;
