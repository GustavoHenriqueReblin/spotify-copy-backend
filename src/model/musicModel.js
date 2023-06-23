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

const addMusic = async (music) => {
    const { title, isFavorite, duration, image } = music;

    const [addedMusic] = await conn.execute(
        "INSERT INTO music (title, isFavorite, duration, image) VALUES (?, ?, ?, ?)", [title, isFavorite, duration, image]
    );

    return {insertedId: addedMusic.insertId};
};

module.exports = {
    getAllMusics, getAllMusicsFromAPlaylist, addMusic
}