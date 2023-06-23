const playlistModel = require('../model/playlistModel');

const getAllPlaylists = async (_req, res) => {
    const playlists = await playlistModel.getAllPlaylists();
    return res.status(200).json(playlists);
}

module.exports = {
    getAllPlaylists
}