import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#FFFFFF" },
    secondary: { main: "rgb(186, 221, 182)" }, 
    
  },
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
    ].join(','),
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
