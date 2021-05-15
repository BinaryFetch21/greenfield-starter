import React from "react";
import OneProduct from "./OneProduct.jsx"

var GetProduct = (props) => (
    <div className="container flex">
      {props.products.map((product, index) => (
        <OneProduct deleteProd={props.deleteProd} setProductToUpdate={props.setProductToUpdate} product={product} key={index} />
      ))}
    </div>
  );
  
  export default GetProduct;