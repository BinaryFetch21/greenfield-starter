import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UI from "./indexui.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import Cart from "./components/Cart.js";

export default class Index extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/">
              <UI />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("app"));