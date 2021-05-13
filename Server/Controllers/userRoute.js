const express = require("express");
const router = express.Router();
const User = require("../../DB/Models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.findOne();
    res.send(users);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
