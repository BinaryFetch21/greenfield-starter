import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav.js";
import Card from "./Card.js";
import axios from "axios";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
    };
  }

  componentDidMount() {
    axios
      .get("/products")
      .then((products) => {
        console.log("teeeest", products);
        this.setState({ productData: products.data }, () => {
          console.log(this.state.productData);
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>
        <div className="card">
          {this.state.productData.map((product) => {
            return <Card product={product} key={product._id} />;
          })}
        </div>
      </div>
    );
  }
}
