import React, { Component } from "react";
import "./App.css";
import Header from "../components/header";
import { Route, Switch } from "react-router-dom";
import NewStory from "../pages/NewStory";
import Home from "../pages/Home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/new-story" component={NewStory} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
