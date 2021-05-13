const express = require("express");
const router = express.Router();
const Product = require("../../DB/Models/Product");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.send(product);
  } catch (err) {
    res.send(err);
  }
});

router.patch("/:_id", async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      {
        new: true,
      }
    );
    res.send(product);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ _id: req.params._id });
    res.send(product);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
