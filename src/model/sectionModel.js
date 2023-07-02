const conn = require('./conn');

const getSection = async (idUser, ip) => {
    const [section] = await conn.execute("SELECT * FROM section WHERE idUser = ? AND ip = ? LIMIT 1", [idUser, ip]);
    return section;
};

const refreshSection = async (section) => {
    const {idUser, ip, expirationDate} = section;
    let query;
    let updatedSection;

    const [hasSection] = await conn.execute("SELECT * FROM section WHERE idUser = ?", [idUser]);
    if (hasSection.length <= 0) {
        query = "INSERT INTO section (idUser, ip, expirationDate) VALUE (?, ?, ?)";    
        updatedSection = await conn.execute(query, [idUser, ip, expirationDate]);
    } else {
        query = "UPDATE section SET expirationDate = ? WHERE idUser = ? AND ip = ?";    
        updatedSection = await conn.execute(query, [expirationDate, idUser, ip]);
    }
    
    return updatedSection;
};

module.exports = {
    getSection, refreshSection
};