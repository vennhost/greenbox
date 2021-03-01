import React, { Component } from "react";
import Login from "../auth/Login";
import Product from "../cards/Product";
import Seach from "../Seach";
import HomeSlide from "./HomeSlide";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <HomeSlide />

        <Product />
      </>
    );
  }
}

export default Home;
