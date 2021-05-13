const router = require("express").Router();
const Users = require("../../DB/Models/User");
const { registerValidation } = require("../validation");
var bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const emailExist = await Users.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).send("Email already  exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const users = new Users({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUsers = await users.save();
    res.send({ users: users._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
