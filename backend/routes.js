const express = require("express");

const router = express.Router();

const upload = require("./helpers/upload");

const {
  createMemory,
  getMemories,
  getMemory,
  deleteMemory,
  updateMemory,
} = require("./controllers/MemoryController");

router.post(
  "/",
  upload.single("image"),
  (req, res, next) => {
    const image = req.file;
    if (!image) {
      return res.status(400).json({ msg: "Por favor, envie um arquivo!" });
    }

    next();
  },
  (req, res) => createMemory(req, res)
);

router.get("/", (req, res) => getMemories(req, res));

router.get("/:id", (req, res) => getMemory(req, res));

router.delete("/:id", (req, res) => deleteMemory(req, res));

// The PATCH Method update only the user wants to be updated
router.patch("/:id", (req, res) => {
  updateMemory(req, res);
});

module.exports = router;
