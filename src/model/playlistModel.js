const conn = require('./conn');

const getAllPlaylists = async () => {
    const query = 
        "SELECT playlist.*, CONCAT(artist.firstName, ' ', artist.lastName) artistName " + 
        "FROM playlist " + 
        "INNER JOIN artist ON artist.id = playlist.idArtist";
    const [playlists] = await conn.execute(
        query
    );
    return playlists;
};

module.exports = {
    getAllPlaylists
}