import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import GetProduct from "./components/GetProduct.jsx";
import AddProduct from "./components/AddProduct.jsx";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "GetProduct",
      products: [],
      prodToUpdate: {},
    };

    // this.addProd = this.addProd.bind(this);
    this.toggleViews = this.toggleViews.bind(this);
    this.updateProd = this.updateProd.bind(this);
    this.setProductToUpdate = this.setProductToUpdate.bind(this);
    this.deleteProd = this.deleteProd.bind(this);
  }

  toggleViews(view) {
    this.setState({
      currentView: view,
    });
  }

  addProd(product) {
    this.setState({ products: [...this.state.products, product] });
    this.toggleViews("GetProduct");
  }

  componentDidMount() {
    this.getProd();
  }
  getProd() {
    axios.get("/products").then(({ data }) => {
      this.setState({
        products: data,
      });
    });
  }

  updateProd(updatedProd) {
    console.log(updatedProd);
    this.setState({
      products: this.state.products.map((product) => {
        if (product._id === updatedProd._id) {
          return updatedProd;
        }
        return product;
      })
    });
    this.toggleViews("GetProduct");
  }
  
  setProductToUpdate(prodToUpdate) {
    this.setState({ prodToUpdate, currentView: "AddProduct" });
  }

  deleteProd(id) {
    axios.delete(`/products/${id}`).then(({ data }) => {
      this.setState({
        products: this.state.products.filter((product) => product._id !== data._id)
      });
    });
  }

  render() {
    return (
      <div>
        <nav>
          <ul className="flex">
            <li>
              <button onClick={() => this.toggleViews("GetProduct")}>
                All Products
              </button>
            </li>
            <li>
              <button onClick={() => this.toggleViews("AddProduct")}>
                Add Product
              </button>
            </li>
            <li>
              <button onClick={() => this.toggleViews("GetOrders")}>
                All Orders
              </button>
            </li>
          </ul>
        </nav>
        <div>
          {this.state.currentView === "GetProduct" ? (
            <GetProduct
              products={this.state.products}
              deleteProd={this.deleteProd}
              setProductToUpdate={this.setProductToUpdate}
            />
          ) : (
            <AddProduct
              updateProd={this.updateProd}
              addProd={this.addProd.bind(this)}
              prodToUpdate={this.state.prodToUpdate}
            />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("app"));
