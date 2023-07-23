const sessionModel = require('../model/sessionModel');

const getSession = async (req, res) => {
    let { idUser, ip } = req.body;

    const session = await sessionModel.getSession(idUser, ip);
    return res.status(200).json(session);
};

const refreshSession = async (req, res) => {
    await sessionModel.refreshSession(req.body);
    return res.status(204).json();
};

module.exports = {
    getSession, refreshSession
};