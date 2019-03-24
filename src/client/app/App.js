import React, { Component } from "react";
import "./App.css";
import Header from "../components/header";
import { Route, Switch } from "react-router-dom";
import NewStory from "../pages/NewStory";
import Home from "../pages/Home";

import { approveMetamask, getAccount } from '../services/EthService'; 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {address: null};
  }

  async componentDidMount() {
    try {
      await approveMetamask();
      this.setState({ address: await getAccount() });
    } catch (err) {
      // Error approving metamask
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header address={this.state.address} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/new-story" component={NewStory} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
