const conn = require('./conn');

const getAll = async () => {
    const [musics] = await conn.execute("SELECT * FROM music");
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
    getAll, addMusic
}