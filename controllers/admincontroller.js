const User = require('../models/users'); // Importa el modelo de User
const Payment = require('../models/payment'); // Importa el modelo de Payment

const adminController = { 
  
    getUsers: async (req, res) => {
      try {
        const users = await User.find(); // Verifica que esta línea obtenga todos los usuarios
        res.status(200).json(users);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los usuarios' });
      }
    },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndRemove(req.params.id);
      res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar el usuario' });
    }
  },

  getUserPayments: async (req, res) => {
    try {
      const payments = await Payment.find({ username: req.query.username });
      res.status(200).json(payments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los pagos del usuario' });
    }
  }
};

module.exports = adminController;



/*const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const User = require('../models/users'); // Asegúrate de importar el modelo de User

router.get('/admin', (req, res) => {
    if (req.user.role === 'admin') {
        res.render('admin/index');
    } else {
        res.redirect('/login');
    }
});

router.get('/admin/users', (req, res) => {
    if (req.user.role === 'admin') {
        User.find().then(users => {
            res.render('admin/usuarios', { users });
        });
    } else {
        res.redirect('/login');
    }
});

router.get('/admin/usuarios/:id', (req, res) => {
    if (req.user.role === 'admin') {
        User.findById(req.params.id).then(user => {
            res.render('admin/usuarios', { user });
        });
    } else {
        res.redirect('/login');
    }
});

router.post('/admin/users/:id', (req, res) => {
    if (req.user.role === 'admin') {
        User.findByIdAndUpdate(req.params.id, req.body).then(() => {
            res.redirect('/admin/usuarios');
        });
    } else {
        res.redirect('/login');
    }
});

router.delete('/admin/users/:id', (req, res) => {
    if (req.user.role === 'admin') {
        User.findByIdAndRemove(req.params.id).then(() => {
            res.redirect('/admin/usuarios');
        });
    } else {
        res.redirect('/login');
    }
});

module.exports = router; */// Exporta el router en lugar de adminController


/*const express = require('express');
const Admin = require('../models/Admin');
const User = require('../models/users'); // Asegúrate de importar el modelo de User
const Payment = require('../models/payment'); // Asegúrate de importar el modelo de Payment

const adminController = { 
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndRemove(req.params.id);
      res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar el usuario' });
    }
  },

  getUserPayments: async (req, res) => {
    try {
      const payments = await Payment.find({ username: req.query.username });
      res.status(200).json(payments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los pagos del usuario' });
    }
  }
};

module.exports = adminController;

*/