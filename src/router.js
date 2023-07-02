const express = require("express");
const router = express.Router();

const musicController = require("./controller/musicController");
const platlistController = require("./controller/playlistController");
const userController = require("./controller/userController");
const sectionController = require("./controller/sectionController");

const musicMiddleware = require("./middlewares/musicMiddleware");
const userMiddleware = require("./middlewares/userMiddleware");
const sectionMiddleware = require("./middlewares/sectionMiddleware");

router.get("/musics", musicController.getAllMusics);
router.post("/musics", musicMiddleware.validateBody, musicController.addMusic);

router.get("/playlists", platlistController.getAllPlaylists);
router.get("/musicsFromAPlaylist", musicController.getAllMusicsFromAPlaylist);

router.post("/user", userMiddleware.validateBodyLogin, userController.findUser);
router.put("/user/:id", userMiddleware.validateBodyUpdateUser, userController.updateUser);
router.post("/addUser", userMiddleware.validateBodyRegister, userController.addUser);

router.post("/section", sectionMiddleware.validateBodySection, sectionController.getSection);

module.exports = router;