const express = require("express");
const router = express.Router();
const musicController = require("./controller/musicController");
const musicMiddleware = require("./middlewares/musicMiddleware");
const platlistController = require("./controller/playlistController");
const userController = require("./controller/userController");
const userMiddleware = require("./middlewares/userMiddleware");

router.get("/musics", musicController.getAllMusics);
router.post("/musics", musicMiddleware.validateBody, musicController.addMusic);

router.get("/playlists", platlistController.getAllPlaylists);
router.get("/musicsFromAPlaylist", musicController.getAllMusicsFromAPlaylist);

router.post("/user", userMiddleware.validateBodyLogin, userController.findUser);
router.post("/addUser", userMiddleware.validateBodyRegister, userController.addUser);

module.exports = router;