const validateBodySession = (req, res, next) => {
    const { body } = req;

    if (body.idUser === undefined) {
        return res.status(400).json({message: "The field 'idUser' is required."});
    } else 
    if (body.idUser === '') {
        return res.status(400).json({message: "The field 'idUser' cannot be empty."});
    } else 
    if (body.ip === undefined) {
        return res.status(400).json({message: "The field 'ip' is required."});
    } else 
    if (body.ip === '') {
        return res.status(400).json({message: "The field 'ip' cannot be empty."});
    }

    next();
};

const validateBodyRefreshSession = (req, res, next) => {
    const { body } = req;

    if (body.idUser === undefined) {
        return res.status(400).json({message: "The field 'idUser' is required."});
    } else 
    if (body.idUser === '') {
        return res.status(400).json({message: "The field 'idUser' cannot be empty."});
    } else
    if (body.ip === undefined) {
        return res.status(400).json({message: "The field 'ip' is required."});
    } else 
    if (body.ip === '') {
        return res.status(400).json({message: "The field 'ip' cannot be empty."});
    } else 
    if (body.expirationDate === undefined) {
        return res.status(400).json({message: "The field 'expirationDate' is required."});
    } else 
    if (body.expirationDate === '') {
        return res.status(400).json({message: "The field 'expirationDate' cannot be empty."});
    }

    next();
};

module.exports = {
    validateBodySession, validateBodyRefreshSession
};