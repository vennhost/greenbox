import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import NavBar from "./nav/NavBar";
import MainFooter from "./footer/MainFooter";
import terms from "../pages/terms";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={`/auth/login`} component={Login} />
            <Route path={`/auth/register`} component={Register} />
          </Switch>

          <MainFooter />
        </Router>
      </div>
    );
  }
}

export default Main;
