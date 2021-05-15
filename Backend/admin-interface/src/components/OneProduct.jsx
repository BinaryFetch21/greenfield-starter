import React from "react";

var OneProduct = (props) => (
  <div>
    <div className="card">
      <img src={props.product.image} />
      
        <h4>
          <b>{props.product.name}</b>
          <br />
          <span>{props.product.price}</span>
          <p>{props.product.brand}</p>
        </h4>
    </div>
    <button onClick={() => props.deleteProd(props.product._id)}>Delete</button>
    <button onClick={() => props.setProductToUpdate(props.product)}>Update</button>
  </div>
);

export default OneProduct;