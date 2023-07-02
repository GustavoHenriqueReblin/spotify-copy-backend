const sectionModel = require('../model/sectionModel');

const getSection = async (req, res) => {
    let { idUser, ip } = req.body;

    const section = await sectionModel.getSection(idUser, ip);
    return res.status(200).json(section);
};

const refreshSection = async (req, res) => {
    const { idUser } = req.params;

    await userModel.updateSection(idUser, req.body);
    return res.status(204).json();
};

module.exports = {
    getSection, refreshSection
};