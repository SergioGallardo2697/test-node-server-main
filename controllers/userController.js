const User = require('../models/User');

async function createUser(req, res) {
    const { nombres, apellidoPaterno, apellidoMaterno, correo, telefono, genero } = req.body;
    try {
        const user = await User.create({ nombres, apellidoPaterno, apellidoMaterno, correo, telefono, genero });
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    createUser,
};