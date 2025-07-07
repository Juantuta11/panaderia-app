const express = require('express');
const app = express();

// Otras rutas importadas...
const ventasRoutes = require('./routes/ventas');

// Middlewares (ej. body-parser)
app.use(express.json());

// Rutas
app.use('/ventas', ventasRoutes);

// Resto del código...
