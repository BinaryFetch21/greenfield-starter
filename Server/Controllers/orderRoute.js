const express = require("express");
const router = express.Router();
const Order = require("../../DB/Models/Order");

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.send(orders);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.send(order);
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
    const order = await Order.findOneAndDelete({ _id: req.params._id });
    res.send(order);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
