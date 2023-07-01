const userModel = require('../model/userModel');

const addUser = async (req, res) => {
    const addedUser = await userModel.addUser(req.body);
    return res.status(201).json(addedUser);
}

const findUser = async (req, res) => {
    let { id, login, password } = req.body;
    login = login.trim();
    password = password.trim();

    const user = await userModel.findUser(id, login, password);
    return res.status(200).json(user);
}

const updateUser = async (req, res) => {
    const { id } = req.params;

    await userModel.updateUser(id, req.body);
    return res.status(204).json();
};

module.exports = {
    addUser, findUser, updateUser
}