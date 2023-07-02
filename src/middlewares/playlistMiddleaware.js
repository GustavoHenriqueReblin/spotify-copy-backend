const validateBodyGetAllPlaylists = (req, res, next) => {
    const { body } = req;

    if (body.idUser === undefined) {
        return res.status(400).json({message: "The field 'idUser' is required."});
    } else 
    if (body.idUser === '') {
        return res.status(400).json({message: "The field 'idUser' cannot be empty."});
    }

    next();
};

module.exports = {
    validateBodyGetAllPlaylists
};