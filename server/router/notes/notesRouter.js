const express = require("express");
const Notes = require("../../database/notes/notes");
const router = express.Router();

//! Get Notes
router.get("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const notes = await Notes.find({ email });
    if (!notes) {
      return res.status(404).json({ msg: "Notes Not Found" });
    }
    return res.status(200).json(notes);
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error", error });
  }
});

//! Create Notes
router.post("/createNotes/newNotes", async (req, res) => {
  const { title, content, createdAt, updatedAt, email } = req.body;
  try {
    const notes = new Notes({
      title,
      content,
      createdAt,
      updatedAt,
      email,
    });
    await notes.save();
    return res.status(201).json({ msg: "Notes Create Successfully", notes });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error", error });
  }
});

//! Update Notes
router.put("/updateNotes/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content, createdAt, updatedAt } = req.body;
  try {
    const notes = await Notes.findByIdAndUpdate(
      id,
      {
        title,
        content,
        updatedAt,
      },
      { new: true }
    );
    if (!notes) {
      return res.status(404).json({ msg: "Notes Not Found" });
    }
    return res.status(200).json({ msg: "Notes Update Successfully", notes });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error", error });
  }
});

//! Delete Notes
router.delete("/deleteNotes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const notes = await Notes.findByIdAndDelete(id);
    if (!notes) {
      return res.status(404).json({ msg: "Notes Not Found" });
    }
    return res.status(200).json({ msg: "Notes Deleted Successfully", notes });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error", error });
  }
});

//! Sort Notes
router.get("/sortNotes/:email", async (req, res) => {
  const { email } = req.params;
  const { sort } = req.query;
  try {
    let sortCriteria = {};
    if (sort === "ascending") {
      sortCriteria = { title: 1 };
    } else {
      sortCriteria = { title: -1 };
    }

    const notes = await Notes.find({ email }).sort(sortCriteria);

    if (!notes.length) {
      return res.status(404).json({ msg: "Notes Not Found" });
    }
    return res.status(200).json(notes);
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error", error });
  }
});

module.exports = router;
