const musicModel = require('../model/musicModel');

const getAllMusics = async (_req, res) => {
    const musics = await musicModel.getAllMusics();
    return res.status(200).json(musics);
}

const getAllMusicsFromAPlaylist = async (_req, res) => {
    const musics = await musicModel.getAllMusicsFromAPlaylist();
    return res.status(200).json(musics);
}

const addMusic = async (req, res) => {
    const addedMusic = await musicModel.addMusic(req.body);
    return res.status(201).json(addedMusic);
};

module.exports = {
    getAllMusics, getAllMusicsFromAPlaylist, addMusic
}