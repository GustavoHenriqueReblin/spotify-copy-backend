const conn = require('./conn');

const addUser = async (user) => {
    const { login, password, name, dateOfBirthday, gender } = user;

    const [addedUser] = await conn.execute(
        "INSERT INTO user (login, password, name, dateOfBirthday, gender) VALUES (?, ?, ?, ?, ?)", [login, password, name, dateOfBirthday, gender]
    );

    return {insertedId: addedUser.insertId};
};

const findUser = async (id, login, password) => {
    if (id != "") {
        const [userLogged] = await conn.execute("SELECT * FROM user WHERE id = ? LIMIT 1", [id]);
        return userLogged;
    } else {
        const [user] = await conn.execute("SELECT * FROM user WHERE login = ? AND password = ? LIMIT 1", [login, password]);
        return user;
    }
};

const updateUser = async (id, user) => {
    const {login, password, name, accountLevel, dateOfBirthday, gender} = user;
    let query;
    let updatedUser;

    query = "UPDATE user SET login = ?, password = ?, name = ?, accountLevel = ?, dateOfBirthday = ?, gender = ? WHERE id = ?";
    updatedUser = await conn.execute(query,
        [login, password, name, accountLevel, dateOfBirthday, gender, id]
    );
    
    return updatedUser;
};

module.exports = {
    addUser, findUser, updateUser
}