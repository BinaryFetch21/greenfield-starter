const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product
