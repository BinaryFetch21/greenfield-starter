import React, { Component } from "react";
import Nav from "./Nav.js";

export default class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      setCart: []
    };
    this.getTotalSum = this.getTotalSum.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  getTotalSum = () => {
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
  };

  clearCart = () => {
    this.setState({ setCart: [] });
  };

  setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    this.setState({ setCart: newCart });
  };

  removeFromCart = (productToRemove) => {
    this.setState({ setCart: cart.filter((product) => product !== productToRemove)});
  };

  render(){
  return (
    <>
      <Nav />
      <h1>Cart</h1>
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      <div className="products">
        {cart.map((product) => (
          <div className="product" key={product._id}>
            <h3>{this.props.product.name}</h3>
            <h4>€ {this.props.product.price}</h4>
            <input
              value={product.quantity}
              onChange={(e) => setQuantity(product, parseInt(e.target.value))}
            />
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>

      <div>Total Cost: €{getTotalSum()}</div>
    </>
  );
}
}
