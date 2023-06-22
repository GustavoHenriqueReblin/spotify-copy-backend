const express = require("express");
const router = express.Router();
const musicController = require("./controller/musicController");
const musicMiddleware = require("./middlewares/musicMiddleware");

router.get("/musics", musicController.getAll);
router.post("/addMusic", musicMiddleware.validateBody, musicController.addMusic);

module.exports = router;