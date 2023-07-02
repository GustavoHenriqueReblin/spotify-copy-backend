const playlistModel = require('../model/playlistModel');

const getAllPlaylists = async (req, res) => {
    const playlists = await playlistModel.getAllPlaylists(req.body);
    return res.status(200).json(playlists);
}

module.exports = {
    getAllPlaylists
}