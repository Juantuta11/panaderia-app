const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/panaderia')
  .then(() => console.log('✔ Conectado a MongoDB'))
  .catch(err => console.error('✘ Error de conexión a MongoDB', err));

// Importar rutas (cada archivo debe exportar router con "module.exports = router")
const usuariosRouter = require('./usuarios');
const productosRouter = require('./productos');
const reportesRouter = require('./reportes');

// Usar rutas
app.use('/api/usuarios', usuariosRouter);
app.use('/api/productos', productosRouter);
app.use('/api/reportes', reportesRouter);

// Arrancar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✔ Servidor corriendo en http://localhost:${PORT}`);
});