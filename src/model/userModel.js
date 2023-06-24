const conn = require('./conn');

const findUser = async (login, password) => {
    const [user] = await conn.execute("SELECT * FROM user WHERE login = ? AND password = ? LIMIT 1", [login, password]);
    return user;
};

const addUser = async (user) => {
    const { login, password, name, dateOfBirthday, gender } = user;

    const [addedUser] = await conn.execute(
        "INSERT INTO user (login, password, name, dateOfBirthday, gender) VALUES (?, ?, ?, ?, ?)", [login, password, name, dateOfBirthday, gender]
    );

    return {insertedId: addedUser.insertId};
};

module.exports = {
    findUser, addUser
}