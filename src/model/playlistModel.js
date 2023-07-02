const conn = require('./conn');

const getAllPlaylists = async (user) => {
    const { idUser } = user;
    const query = 
        "SELECT playlist.*, CONCAT(artist.firstName, ' ', artist.lastName) artistName " + 
        "FROM playlist " + 
        "INNER JOIN artist ON artist.id = playlist.idArtist " +
        "INNER JOIN library ON library.id = playlist.idLibrary " +
        "WHERE library.idUser = ?";
    const [playlists] = await conn.execute(
        query, [idUser]
    );
    return playlists;
};

module.exports = {
    getAllPlaylists
}