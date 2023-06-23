const express = require("express");
const router = express.Router();
const musicController = require("./controller/musicController");
const platlistController = require("./controller/playlistController");
const musicMiddleware = require("./middlewares/musicMiddleware");

router.get("/musics", musicController.getAllMusics);
router.get("/playlists", platlistController.getAllPlaylists);
router.get("/musicsFromAPlaylist", musicController.getAllMusicsFromAPlaylist);
router.post("/musics", musicMiddleware.validateBody, musicController.addMusic);

module.exports = router;