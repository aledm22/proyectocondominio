/*const User = require('../models/users'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authController = { 
  login: async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  },

  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: 'Usuario creado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear usuario' });
    }
  }
};

module.exports = authController;
*/

const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authController = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const role = username === 'SANMIGUEL' ? 'admin' : 'user'; // Asigna rol basado en el nombre de usuario
      const user = new User({ username, email, password: hashedPassword, role });
      await user.save();
      res.status(201).json({ message: 'Registro exitoso!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear usuario' });
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, role: user.role }); // Incluye el rol en la respuesta
  }
};

module.exports = authController;
