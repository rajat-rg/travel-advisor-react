const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Places = require("../models/Places");
const fetchuser = require("../middleware/fetchuser");

// Fetch all notes of user using GET: /api/places/fetchplaces .Login required
router.get("/fetchplaces", fetchuser, async (req, res) => {
  try {
    const places = await Places.find({ user: req.user.id });
    res.json(places);
  } catch (err) {
    res.status(500).send("SoMe ErRoR oCcUrEd");
  }
});

// Add a note using POST: /api/places/addplace .Login required
router.post(
  "/addplace",
  fetchuser,
  async (req, res) => {
    const { name, location, address, email, phone, website, price } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const place = new Places({ name, location, address, email, phone, website, price, user: req.user.id });
      const savedPlace = await place.save();
      res.json(savedPlace);
    } catch (err) {
      res.status(500).send("SoMe ErRoR oCcUrEd");
    }
  }
);


// Delete an existing note using DELETE: /api/places/deleteplace/:id .Login required
router.delete("/deleteplace/:id", fetchuser, async (req, res) => {
  try {
    let place = await Places.findById(req.params.id);
    if (!place) return res.status(404).send("Not Found!!");

    if (place.user.toString() !== req.user.id)
      return res.status(401).send("Touble authenticating");

    place = await Places.findByIdAndDelete(req.params.id);
    res.json({ message: "Place deleted successfully", place });
  } catch (err) {
    res.status(500).send("SoMe ErRoR oCcUrEd");
    console.log(err);
  }
});

module.exports = router;
