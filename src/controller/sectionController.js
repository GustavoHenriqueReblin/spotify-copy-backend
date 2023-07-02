const sectionModel = require('../model/sectionModel');

const getSection = async (req, res) => {
    let { idUser, ip } = req.body;

    const section = await sectionModel.getSection(idUser, ip);
    return res.status(200).json(section);
};

module.exports = {
    getSection
};