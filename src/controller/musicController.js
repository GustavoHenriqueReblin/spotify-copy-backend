const musicModel = require('../model/musicModel');

const getAll = async (_req, res) => {

    const musics = await musicModel.getAll();

    return res.status(200).json(musics);
}

const addMusic = async (req, res) => {

    const addedMusic = await musicModel.addMusic(req.body);

    return res.status(201).json(addedMusic);
};

module.exports = {
    getAll, addMusic
}