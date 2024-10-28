const app = require('./app');
const http = require('http');

const server = http.createServer(app);

const PORT = process.env.PORT || 3016;

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Manejar errores del servidor
server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`El puerto ${PORT} ya está en uso`);
      process.exit(1);
    } else {
      throw error;
    }
  });


  
