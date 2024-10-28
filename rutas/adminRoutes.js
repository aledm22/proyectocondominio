/*const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admincontroller'); // Asegúrate de que este archivo existe y está exportando correctamente

router.get('/admin', (req, res) => {
  if (req.user && req.user.role === 'admin') {
    res.render('admin/index');
  } else {
    res.redirect('/login');
  }
});

router.get('/admin/users', (req, res) => {
  if (req.user && req.user.role === 'admin') {
    User.find().then(users => {
      res.render('admin/usuarios', { users });
    });
  } else {
    res.redirect('/login');
  }
});

router.get('/admin/usuarios/:id', (req, res) => {
  if (req.user && req.user.role === 'admin') {
    User.findById(req.params.id).then(user => {
      res.render('admin/usuarios', { user });
    });
  } else {
    res.redirect('/login');
  }
});

router.post('/admin/users/:id', (req, res) => {
  if (req.user && req.user.role === 'admin') {
    User.findByIdAndUpdate(req.params.id, req.body).then(() => {
      res.redirect('/admin/usuarios');
    });
  } else {
    res.redirect('/login');
  }
});

router.delete('/admin/users/:id', (req, res) => {
  if (req.user && req.user.role === 'admin') {
    User.findByIdAndRemove(req.params.id).then(() => {
      res.redirect('/admin/usuarios');
    });
  } else {
    res.redirect('/login');
  }
});

router.get('/users', adminController.getUsers);
router.delete('/users/:id', adminController.deleteUser);
router.get('/payments', adminController.getUserPayments);

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admincontroller'); // Asegúrate de que este archivo existe y esté exportando correctamente
const authMiddleware = require('../Middleware/authMiddleware');

// Ruta para ver el panel de administración
router.get('/admin', authMiddleware, (req, res) => {
  if (req.user && req.user.role === 'admin') {
    res.render('admin/index');
  } else {
    res.redirect('/login');
  }
});

// Ruta para obtener todos los usuarios (solo admin)
router.get('/admin/users', authMiddleware, async (req, res) => {
  if (req.user && req.user.role === 'admin') {
    const users = await adminController.getUsers(req, res);
  } else {
    res.redirect('/login');
  }
});

// Ruta para obtener un usuario específico
router.get('/admin/usuarios/:id', authMiddleware, async (req, res) => {
  if (req.user && req.user.role === 'admin') {
    const user = await User.findById(req.params.id);
    res.render('admin/usuarios', { user });
  } else {
    res.redirect('/login');
  }
});

// Ruta para actualizar un usuario
router.post('/admin/users/:id', authMiddleware, async (req, res) => {
  if (req.user && req.user.role === 'admin') {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/admin/usuarios');
  } else {
    res.redirect('/login');
  }
});

// Ruta para eliminar un usuario
router.delete('/admin/users/:id', authMiddleware, async (req, res) => {
  if (req.user && req.user.role === 'admin') {
    await User.findByIdAndRemove(req.params.id);
    res.redirect('/admin/usuarios');
  } else {
    res.redirect('/login');
  }
});

// Ruta para obtener todos los usuarios
router.get('/api/users', authMiddleware, adminController.getUsers);

// Ruta para eliminar un usuario
router.delete('/api/users/:id', authMiddleware, adminController.deleteUser);

// Ruta para obtener pagos de usuarios
router.get('/payments', authMiddleware, adminController.getUserPayments);

module.exports = router;
