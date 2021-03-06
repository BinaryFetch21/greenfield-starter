import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav.js";
import Slide from "./components/Slide.js";
import Card from "./components/Card.js";
import Footer from "./components/Footer.js";
import axios from "axios";

export default class UI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      orders: [],
    };
  }

  getOrders(product) {
    this.setState({
      orders: [...this.state.orders, product],
    });
  }

  componentDidMount() {
    axios
      .get("/products")
      .then((products) => {
        console.log(products);
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
        <div>
          <Slide />
        </div>
        <div className="card">
          {this.state.productData.map((product) => {
            return (
              <Card
                product={product}
                key={product._id}
                getOrders={this.getOrders.bind(this)}
              />
            );
          })}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
