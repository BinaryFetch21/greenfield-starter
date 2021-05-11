import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import UI from "./indexui.js";
import Signin from "./components/SignIn.js";

export default class Index extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={UI} />
          <Route path="/signin" component={Signin} />
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("app"));