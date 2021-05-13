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
    return res.status(400).send("Email is wrong");
  }
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send("Password is wrong");
  }
  res.send("Logged In");
});

module.exports = router;
