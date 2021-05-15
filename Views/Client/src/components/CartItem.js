import React from "react";

var CartItem = (props) => (
  <div>
    <div>
      <img src={props.order.image} />
      
        <h4>
          <b>{props.order.name}</b>
          <br />
          <span>{props.order.price}</span>
          <p>{props.order.brand}</p>
        </h4>
    </div>
    <button onClick={() => props.deleteProd(props.order._id)}>Delete</button>
    <button onClick={() => props.setProductToUpdate(props.order)}>Update</button>
  </div>
);

export default CartItem;