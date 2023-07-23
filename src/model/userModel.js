const conn = require('./conn');
const helper = require('../helper');

const addUser = async (user) => {
    const { login, password, name, dateOfBirthday, gender } = user;
    const encryptedPassword = helper.sha1(password);
    const [addedUser] = await conn.execute(
        "INSERT INTO user (login, password, name, dateOfBirthday, gender) VALUES (?, ?, ?, ?, ?)", [login, encryptedPassword, name, dateOfBirthday, gender]
    );

    return {insertedId: addedUser.insertId};
};

const findUser = async (id, login, password) => {
    if (id != "") {
        const [userLogged] = await conn.execute("SELECT * FROM user WHERE id = ? LIMIT 1", [id]);
        return userLogged;
    } else {
        const encryptedPassword = await helper.sha1(password);
        const [user] = await conn.execute("SELECT * FROM user WHERE login = ? AND password = ? LIMIT 1", [login, encryptedPassword]);
        return user;
    }
};

const updateUser = async (id, user) => {
    const {login, password, name, accountLevel, dateOfBirthday, gender} = user;

    const query = "UPDATE user SET login = ?, password = ?, name = ?, accountLevel = ?, dateOfBirthday = ?, gender = ? WHERE id = ?";
    const encryptedPassword = helper.sha1(password);
    const updatedUser = await conn.execute(query,
        [login, encryptedPassword, name, accountLevel, dateOfBirthday, gender, id]
    );
    
    return updatedUser;
};

module.exports = {
    addUser, findUser, updateUser
}