const express = require("express");
const router = express.Router();
const Order = require("../../DB/Models/Order");
const Product = require("../../DB/Models/Product");

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("product");
    res.send(orders);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const orders = await Order.findById(req.params._id).populate(`product`);
    res.send(orders);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const order = await Order.create({
      user: req.cookies.id,
      product: req.body.product,
    });
    const productCart = await Order.find({ _id: order._id }).populate(
      "product"
    );
    console.log("prod", productCart);
    res.send(productCart);
  } catch (err) {
    res.send(err);
  }
});

router.patch("/:_id", async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      {
        new: true,
      }
    );
    res.send(order);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const order = await Order.findOneAndDelete(
      { _id: req.params._id }
    );
    console.log(order);
    res.send(order);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", async (req, res) => {
  try {
    const order = await Order.deleteMany();
    res.send(order);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
