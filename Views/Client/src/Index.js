import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav.js";
import Slide from "./components/Slide.js";
import Card from "./components/Card.js";
import Footer from "./components/Footer.js";

export default class Index extends Component {
  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <Slide />
        </div>
        <div className="card">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("app"));
