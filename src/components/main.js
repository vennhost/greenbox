import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/home/home";
import Login from "./auth/login";
import NavBar from "./nav/nav-bar";

class Main extends Component {
  state = {};
  render() {
    return (
      <>
        <Router>
          <Switch>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/auth/login" component={Login} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Main;
