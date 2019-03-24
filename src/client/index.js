import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#FFFFFF" },
    secondary: { main: "#F1F1F1" }, 
  },
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render(
  <Router>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Router>,
  document.getElementById("root")
);
