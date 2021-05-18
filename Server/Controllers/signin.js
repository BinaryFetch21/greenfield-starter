const router = require("express").Router();
const Users = require("../../DB/Models/User");
const { loginValidation } = require("../validation");
var bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const user = await Users.findOne({ email: req.body.email });
  if (!user) {
    res.status(400).send("Email is wrong");
    alert("Email is wrong");
  }
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    res.status(400).send("Password is wrong");
    alert("Password is wrong");
  }
  console.log('hiiiiii', user._id);
  res.cookie("id", user._id);
  res.send("Logged In");
});

module.exports = router;
