const conn = require('./conn');

const getAllMusics = async () => {
    const [musics] = await conn.execute("SELECT * FROM music");
    return musics;
};

const getAllMusicsFromAPlaylist = async (idPlaylist) => {
    const query = 
        "SELECT music.* FROM mus_pla " +
        "INNER JOIN music ON music.id = mus_pla.idMusic " +
        "WHERE mus_pla.idPlaylist = ? " + 
        "GROUP BY music.id";
    const [musics] = await conn.execute(
        query, [idPlaylist]
    );
    return musics;
};

const getLastMusic = async(idMusic) => {
    const query = 
        "SELECT music.*, " +
        "( " +	
        "    SELECT GROUP_CONCAT(CONCAT(artist.firstName, ' ', artist.lastName) SEPARATOR ', ') artists FROM music " +
        "    INNER JOIN art_mus ON art_mus.idMusic = music.id " +
        "    INNER JOIN artist ON artist.id = art_mus.idArtist " +
        "    WHERE music.id = ? " +
        ") artistsNames " +
        "FROM music " +
        "WHERE music.id = ? ";
    const [music] = await conn.execute(
        query, [idMusic, idMusic]
    );
    return music;
}

const addMusic = async (music) => {
    const { title, isFavorite, duration, image } = music;

    const [addedMusic] = await conn.execute(
        "INSERT INTO music (title, isFavorite, duration, image) VALUES (?, ?, ?, ?)", [title, isFavorite, duration, image]
    );

    return {insertedId: addedMusic.insertId};
};

module.exports = {
    getAllMusics, getAllMusicsFromAPlaylist, getLastMusic, addMusic
}