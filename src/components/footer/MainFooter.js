import React, { Component } from "react";

class MainFooter extends Component {
  state = {};
  getCurrentYear = () => {
    return new Date().getFullYear();
  };

  componentDidMount = () => {
    this.getCurrentYear();
  };
  render() {
    return (
      <div className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        <p>
          Copyright {this.getCurrentYear()} Green Box Ltd. All right reserved
        </p>
      </div>
    );
  }
}

export default MainFooter;
