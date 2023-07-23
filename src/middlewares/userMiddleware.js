const validateBodyRegister = (req, res, next) => {
    const { body } = req;

    if (body.idLastMusic === undefined) {
        return res.status(400).json({message: "The field 'idLastMusic' is required."});
    } else 
    if (body.idLastMusic === '') {
        return res.status(400).json({message: "The field 'idLastMusic' cannot be empty."});
    }
    if (body.login === undefined) {
        return res.status(400).json({message: "The field 'login' is required."});
    } else 
    if (body.login === '') {
        return res.status(400).json({message: "The field 'login' cannot be empty."});
    } else 
    if (body.password === undefined) {
        return res.status(400).json({message: "The field 'password' is required."});
    } else 
    if (body.password === '') {
        return res.status(400).json({message: "The field 'password' cannot be empty."});
    } else 
    if (body.name === undefined) {
        return res.status(400).json({message: "The field 'name' is required."});
    } else 
    if (body.name === '') {
        return res.status(400).json({message: "The field 'name' cannot be empty."});
    } else 
    if (body.dateOfBirthday === undefined) {
        return res.status(400).json({message: "The field 'dateOfBirthday' is required."});
    } else 
    if (body.dateOfBirthday === '') {
        return res.status(400).json({message: "The field 'dateOfBirthday' cannot be empty."});
    } 
    if (body.gender === undefined) {
        return res.status(400).json({message: "The field 'gender' is required."});
    } else 
    if (body.gender === '') {
        return res.status(400).json({message: "The field 'gender' cannot be empty."});
    }

    next();
}

const validateBodyUpdateUser = (req, res, next) => {
    const { body } = req;

    if (!(body.expiryDate != "")) { // Apenas ao efetuar login irá mudar a data de expiração...
        if (body.login === undefined) {
            return res.status(400).json({message: "The field 'e-mail' is required."});
        } else 
        if (body.login === '') {
            return res.status(400).json({message: "The field 'e-mail' cannot be empty."});
        } else 
        if (body.password === undefined) {
            return res.status(400).json({message: "The field 'password' is required."});
        } else 
        if (body.password === '') {
            return res.status(400).json({message: "The field 'password' cannot be empty."});
        } else 
        if (body.name === undefined) {
            return res.status(400).json({message: "The field 'name' is required."});
        } else 
        if (body.name === '') {
            return res.status(400).json({message: "The field 'name' cannot be empty."});
        } else 
        if (body.dateOfBirthday === undefined) {
            return res.status(400).json({message: "The field 'dateOfBirthday' is required."});
        } else 
        if (body.dateOfBirthday === '') {
            return res.status(400).json({message: "The field 'dateOfBirthday' cannot be empty."});
        } 
        if (body.gender === undefined) {
            return res.status(400).json({message: "The field 'gender' is required."});
        } else 
        if (body.gender === '') {
            return res.status(400).json({message: "The field 'gender' cannot be empty."});
        }
    } 

    next();
}

const validateBodyLogin = (req, res, next) => {
    const { body } = req;

    if (body.id === "" && body.login != "" && body.password != "") {
        if (body.login === undefined) {
            return res.status(400).json({message: "The field 'e-mail' is required."});
        } else 
        if (body.login === '') {
            return res.status(400).json({message: "The field 'e-mail' cannot be empty."});
        } else 
        if (body.password === undefined) {
            return res.status(400).json({message: "The field 'password' is required."});
        } else 
        if (body.password === '') {
            return res.status(400).json({message: "The field 'password' cannot be empty."});
        }
    } else if (body.id === "") {
        return res.status(400).json({message: "The field 'id' is required."});
    } 

    next();
}

module.exports = {
    validateBodyRegister, validateBodyLogin, validateBodyUpdateUser
};