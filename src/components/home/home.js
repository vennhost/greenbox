import React, {Component} from "react";
import Login from "../auth/login";

class Home extends Component {
    state = {  }
    render() {
        return (
           <>
<div className="bg-teal-700">Home Page</div>
<Login />
           </> 
        );
    }
}

export default Home;