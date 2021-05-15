import React from 'react'
import CartItem from './CartItem.js'
import axios from "axios";
class Cart extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      orders : [],

    };
    // this.getCart = this.getCart.bind(this);
  }

  componentDidMount() {
    this.getCart();
  }

  getCart() {
    axios.get("/orders").then(({ data }) => {
      this.setState({
        orders: data,
      });
    });
  }

  render() {
  return (
    <div>
      {props.orders.map((order, index) => (
        <CartItem order={order} key={index} />
      ))}
    </div>
  )
}
}
export default Cart;