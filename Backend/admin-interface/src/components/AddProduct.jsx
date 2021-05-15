import React from "react";
import axios from "axios";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.prodToUpdate._id,
      name: this.props.prodToUpdate.name || "",
      price: this.props.prodToUpdate.price || "",
      image: this.props.prodToUpdate.image || "",
      brand: this.props.prodToUpdate.brand || ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
      if (this.state._id){
      axios
        .patch(`/products/${this.state._id}`, this.state)
        .then(({ data }) => {
          this.props.updateProd(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post("/products", this.state)
        .then(({ data }) => {
          console.log(data);
          this.props.addProd(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div className="lend-container">
        <h4>Add / Update Product</h4>
        <div className="lend-card">
          <form>
            <div className="flex">
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  className="small-input"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </div>
              <div className="input-group">
                <label htmlFor="price">Price</label>
                <input
                  name="price"
                  className="small-input"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.price}
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="image">Image</label>
              <input
                name="image"
                type="text"
                onChange={this.handleChange}
                value={this.state.image}
              />
            </div>
            <div className="input-group">
              <label htmlFor="brand">Brand</label>
              <input
                name="brand"
                type="text"
                rows="4"
                onChange={this.handleChange}
                value={this.state.brand}
              />
            </div>
            <button className="right" onClick={this.handleSubmit.bind(this)}>
              Validate
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProduct;