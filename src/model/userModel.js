const conn = require('./conn');
const helper = require('../helper');

const addUser = async (user) => {
    const { idLastMusic, login, password, name, accountLevel, dateOfBirthday, gender } = user;
    
    const query = "INSERT INTO user (idLastMusic, login, password, name, accountLevel, dateOfBirthday, gender) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const encryptedPassword = await helper.sha1(password);
    const [addedUser] = await conn.execute(
        query, [idLastMusic, login, encryptedPassword, name, accountLevel, dateOfBirthday, gender]
    );

    return {insertedId: addedUser.insertId};
};

const findUser = async (id, login, password) => {
    if (id != "") {
        const [userLogged] = await conn.execute(
            "SELECT * FROM user WHERE id = ? LIMIT 1", [id]
        );
        return userLogged;
    } else {
        const encryptedPassword = await helper.sha1(password);
        const [user] = await conn.execute(
            "SELECT * FROM user WHERE login = ? AND password = ? LIMIT 1", [login, encryptedPassword]
        );
        return user;
    }
};

const updateUser = async (id, user) => {
    const { idLastMusic, login, password, name, accountLevel, dateOfBirthday, gender} = user;

    const query = "UPDATE user SET idLastMusic = ?, login = ?, password = ?, name = ?, accountLevel = ?, dateOfBirthday = ?, gender = ? WHERE id = ?";
    const encryptedPassword = helper.sha1(password);
    const updatedUser = await conn.execute(
        query, [idLastMusic, login, encryptedPassword, name, accountLevel, dateOfBirthday, gender, id]
    );
    
    return updatedUser;
};

module.exports = {
    addUser, findUser, updateUser
}