const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const secret = "$SeCr3tK3Y$";
//creating user using POST: /api/auth/createuser
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        res.status(400).json({ error: errors.array() });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, secret);

      res.json(authtoken);
    } catch (err) {
      res.status(500).send("Internal server error");
    }
  }
);

//login user using POST: /api/auth/login
router.post(
  "/login",
  [body("email").isEmail(), body("password").exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { email, password } = req.body;

      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ error: "Login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);

      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, secret);

      res.json(authtoken);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("SoMe ErRoR oCcUrEd");
    }
  }
);

//fetch data of logged in user using POST: /api/auth/getuser
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.json({ user });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("SoMe ErRoR oCcUrEd");
  }
});

module.exports = router;
