require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express(); // ← app se declara antes de usar

// Middlewares globales
app.use(cors());
app.use(express.json());

// Importar rutas
const productosRouter = require('./routes/productos');
const ventasRouter = require('./routes/ventas');
const testRouter = require('./routes/test');

// Activar rutas personalizadas primero
app.use('/productos', productosRouter);
app.use('/ventas', ventasRouter);
app.use('/test', testRouter);

// Luego servir archivos estáticos
app.use(express.static(path.join(__dirname, 'www')));

// Ruta principal (HTML)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB');
    app.listen(3000, () => {
      console.log('🚀 Servidor corriendo en http://localhost:3000');
    });
  })
  .catch((error) => {
    console.error('❌ Error de conexión:', error);
  });