const conn = require('./conn');

const getSession = async (idUser, ip) => {
    const [session] = await conn.execute("SELECT * FROM session WHERE idUser = ? AND ip = ? LIMIT 1", [idUser, ip]);
    return session;
};

const refreshSession = async (session) => {
    const {idUser, ip, expirationDate} = session;
    let query;
    let updatedSession;

    const [hasSession] = await conn.execute("SELECT * FROM session WHERE idUser = ?", [idUser]);
    if (hasSession.length <= 0) {
        query = "INSERT INTO session (idUser, ip, expirationDate) VALUE (?, ?, ?)";    
        updatedSession = await conn.execute(query, [idUser, ip, expirationDate]);
    } else {
        query = "UPDATE session SET expirationDate = ? WHERE idUser = ? AND ip = ?";    
        updatedSession = await conn.execute(query, [expirationDate, idUser, ip]);
    }
    
    return updatedSession;
};

module.exports = {
    getSession, refreshSession
};