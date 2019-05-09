import React, { Component } from "react";
import "./App.css";
import Header from "../components/header";
import { Route, Switch } from "react-router-dom";
import NewStory from "../pages/NewStory";
import Home from "../pages/Home";
import Profile from "../pages/profile";
import Article from "../pages/article";
import Search from "../pages/search";

import { approveMetamask, getAccount } from '../services/EthService';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      address: null,
      posts: []
    };

    fetch('http://localhost:3300/comments')
        .then(response => response.json())
        .then(response => this.setState({ posts: response.data} ))
        .catch(err => console.log(err));
  }

  async componentDidMount() {
    try {
      await approveMetamask();
      this.setState({ address: await getAccount() });
      console.log(this.state.address)
    } catch (err) {
      // Error approving metamask
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <Header address={this.state.address} />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/new-story" component={NewStory} />
          <Route path="/profile" component={Profile} />
          <Route path="/article" component={Article} />
          <Route path="/search" component={Search} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
