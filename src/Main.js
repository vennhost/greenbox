import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import NavBar from "./components/nav/NavBar";
import terms from "./pages/terms";

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
