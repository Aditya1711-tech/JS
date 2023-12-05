const express = require("express");
const router = express.Router();
const User = require("../models/user");

// CREATE USER
router.post("/register", async (req, res) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const createdUser = await user.save();
    res.json(createdUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET ALL USERS
router.get("/allUsers", async (req, res) => {
  const users = await User.find();
  try {
    res.json(users);
  } catch (error) {
    res.status(400).send("Some wrong....");
  }
});
module.exports = router;
