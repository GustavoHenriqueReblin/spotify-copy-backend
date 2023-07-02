const conn = require('./conn');

const getSection = async (idUser, ip) => {
    const [section] = await conn.execute("SELECT * FROM section WHERE idUser = ? AND ip = ? LIMIT 1", [idUser, ip]);
    return section;
};

module.exports = {
    getSection
};