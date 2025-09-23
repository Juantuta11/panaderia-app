const express = require('express');
const router = express.Router();

console.log('📦 Archivo test.js cargado');

router.get('/ping', (req, res) => {
  console.log('🔔 Ruta /ping ejecutada');
  res.json({ mensaje: 'pong' });
});

module.exports = router;