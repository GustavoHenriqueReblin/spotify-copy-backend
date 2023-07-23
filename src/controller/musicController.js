const musicModel = require('../model/musicModel');

const getAllMusics = async (_req, res) => {
    const musics = await musicModel.getAllMusics();
    return res.status(200).json(musics);
}

const getAllMusicsFromAPlaylist = async (_req, res) => {
    const musics = await musicModel.getAllMusicsFromAPlaylist();
    return res.status(200).json(musics);
}

const getLastMusic = async (req, res) => {
    let { idMusic } = req.body;
    const music = await musicModel.getLastMusic(idMusic);
    return res.status(200).json(music);
}

const addMusic = async (req, res) => {
    const addedMusic = await musicModel.addMusic(req.body);
    return res.status(201).json(addedMusic);
};

module.exports = {
    getAllMusics, getAllMusicsFromAPlaylist, getLastMusic, addMusic
}