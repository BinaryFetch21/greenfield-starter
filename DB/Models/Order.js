const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  user : [{ type: Schema.ObjectId, ref: 'User' }],
  product : [{ type: Schema.ObjectId, ref: 'Product' }],
  // image: { type: String, required: true },
  // name: { type: String, required: true },
  // price: { type: String, required: true },
  // brand: { type: String, required: true },
  // description: { type: String, required: true },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
