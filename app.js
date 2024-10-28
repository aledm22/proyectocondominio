const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();
const User = require('./models/users');
const authController = require('./controllers/authController');
const path = require('path');

const authRoutes = require('./rutas/authRoutes'); // Importa las rutas de autenticación
const paymentRoutes = require('./rutas/paymentRoutes'); //importa rutas de pago
const adminRoutes = require('./rutas/adminRoutes');
const authMiddleware = require('./Middleware/authMiddleware');


const app = express();

app.use(cors());
app.use(express.json());

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'view')));

// Usar las rutas de autenticación
app.use('/api', authRoutes);
app.use('/api', paymentRoutes); 
app.use('/api', adminRoutes);
app.use('/api', authMiddleware, paymentRoutes);  // Applying middleware here
app.use('/api', authMiddleware, adminRoutes);  // Applying middleware here

// Rutas individuales (puedes removerlas si están duplicadas en authRoutes)
app.post('/login', authController.login);
app.post('/register', authController.register);

// Endpoint para servir el archivo login.html
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'login.html'));
});
// Endpoint raíz
app.get('/', (req, res) => {
  res.send('Servidor activo y funcionando');
});

// Crear usuario administrador predeterminado
async function createAdminUser() {
  const adminExists = await User.findOne({ username: 'SANMIGUEL' });
  if (!adminExists) {
    const hashedPassword = await bcrypt.hash('33B', 10);
    const adminUser = new User({ username: 'SANMIGUEL', email: 'admin2@tucondominio.com', password: hashedPassword, role: 'admin' });
    await adminUser.save();
    console.log('Admin user creado');
  }

}


// Endpoint para servir el archivo admin.html
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'admin.html'));
});

// Endpoint para servir el archivo user-payments.html
app.get('/user-payments', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'user-payments.html'));
});
// Conexión a MongoDB sin opciones obsoletas
mongoose.connect(process.env.MONGO_URI_TEST)
  .then(() => {
    console.log('Conectado a la base de datos MongoDB')
    createAdminUser();
  }) 
  .catch((error) => console.error('Error al conectar a la base de datos', error));


  
  /*const PORT = process.env.PORT || 3016;
app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});*/


module.exports = app;




