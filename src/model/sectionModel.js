const conn = require('./conn');

const getSection = async (idUser, ip) => {
    const [section] = await conn.execute("SELECT * FROM section WHERE idUser = ? AND ip = ? LIMIT 1", [idUser, ip]);
    return section;
};

const refreshSection = async (idUser, section) => {
    const {ip, expirationDate} = section;

    const query = "UPDATE section SET ip = ?, expirationDate = ? WHERE idUser = ?";
    const updatedSection = await conn.execute(query, [ip, expirationDate, idUser]);
    
    return updatedSection;
};

module.exports = {
    getSection, refreshSection
};