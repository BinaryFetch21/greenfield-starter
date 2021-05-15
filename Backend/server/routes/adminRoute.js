var express = require("express");
var router = express.Router();
const Admin = require("../../db/models/Admin");


router.get("/", async (req, res) => {
  try {
    const admins = await Admin.find();
    res.send(admins);
  } catch (err) {
    console.log(err);
  }
});



router.post("/", async (req, res) => {
  try {
    const admins = await Admin.create(req.body);
    res.send(admins);
  } catch (err) {
    res.send(err);
  }
});


router.patch("/:_id", async (req, res) => {
  try {
    const admins = await Admin.findOneAndUpdate({ _id: req.params._id }, req.body, {
      new: true
    });
    res.send(admins);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const admins = await Admin.findOneAndDelete({ _id: req.params._id });
    res.send(admins);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
