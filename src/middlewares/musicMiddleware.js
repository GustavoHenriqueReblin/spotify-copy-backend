const validateBody = (req, res, next) => {
    const { body } = req;

    if (body.title === undefined) {
        return res.status(400).json({message: "The field 'title' is required."});
    } else 
    if (body.title === '') {
        return res.status(400).json({message: "The field 'title' cannot be empty."});
    } else 
    if (body.isFavorite === undefined) {
        return res.status(400).json({message: "The field 'isFavorite' is required."});
    } else 
    if (body.isFavorite === '') {
        return res.status(400).json({message: "The field 'isFavorite' cannot be empty."});
    } else 
    if (body.duration === undefined) {
        return res.status(400).json({message: "The field 'duration' is required."});
    } else 
    if (body.duration === '') {
        return res.status(400).json({message: "The field 'duration' cannot be empty."});
    } else 
    if (body.image === undefined) {
        return res.status(400).json({message: "The field 'image' is required."});
    }

    next();
}

module.exports = {
    validateBody
};