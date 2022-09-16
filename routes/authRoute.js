const dotenv = require("dotenv");
const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
    console.log(savedUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials.");
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const decryptedPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    decryptedPassword !== req.body.password &&
      res.status(400).json("Wrong credentials.");
    // username !== req.body.username && res.status(400).json('Wrong username.');
    const accessToken = jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
