const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Notes = require("../models/Notes");
const fetchuser = require("../middleware/fetchuser");

// Fetch all notes of user using GET: /api/notes/fetchnotes .Login required
router.get("/fetchnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (err) {
    res.status(500).send("SoMe ErRoR oCcUrEd");
  }
});

// Add a note using POST: /api/notes/addnote .Login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title").isLength({ min: 3 }),
    body("description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const { title, description, tag } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const note = new Notes({ title, description, tag, user: req.user.id });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (err) {
      res.status(500).send("SoMe ErRoR oCcUrEd");
    }
  }
);

// update a note using PUT: /api/notes/updatenote/:id .Login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;

  try {
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    let note = await Notes.findById(req.params.id);
    if (!note) return res.status(404).send("Not Found!!");

    if (note.user.toString() !== req.user.id)
      return res.status(401).send("Touble authenticating");

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json(note);
  } catch (err) {
    res.status(500).send("SoMe ErRoR oCcUrEd");
    console.log(err);
  }
});

// Delete an existing note using DELETE: /api/notes/deletenote/:id .Login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    let note = await Notes.findById(req.params.id);
    if (!note) return res.status(404).send("Not Found!!");

    if (note.user.toString() !== req.user.id)
      return res.status(401).send("Touble authenticating");

    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted successfully", note });
  } catch (err) {
    res.status(500).send("SoMe ErRoR oCcUrEd");
    console.log(err);
  }
});

module.exports = router;
