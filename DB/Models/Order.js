const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  image: {type: String, required: true},
  name: {type: String, required: true},
  price: {type: String, required: true},
  brand: {type: String, required: true},
  description: {type: String, required: true},
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;