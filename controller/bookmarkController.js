const express = require("express");
const Bookmark = require("../models/Bookmark");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json(await Bookmark.find());
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    res.json(await Bookmark.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

//show
router.get("/:id", async (req, res) => {
  try {
    res.json(await Bookmark.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    res.json(await Bookmark.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    res.json(await Bookmark.findByIdAndUpdate(req.params.id, req.body, {new: true}));
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
