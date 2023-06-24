const userModel = require('../model/userModel');

const findUser = async (req, res) => {
    let { login, password } = req.body;
    login = login.trim();
    password = password.trim();

    const user = await userModel.findUser(login, password);
    return res.status(200).json(user);
}

const addUser = async (req, res) => {
    const addedUser = await userModel.addUser(req.body);
    return res.status(201).json(addedUser);
}

module.exports = {
    findUser, addUser
}