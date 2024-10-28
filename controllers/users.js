const express = require('express');
const userRouter = express.Router();
const User = require('../models/users'); // Asegúrate de importar el modelo de User

// Ruta para registrar lo que envia el usuario
userRouter.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
});

module.exports = userRouter;

