const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Ruta de login
router.post('/', async (req, res) => {
  const { correo, contraseña } = req.body;

  try {
    // Buscar usuario por correo y contraseña
    const usuario = await Usuario.findOne({ correo, contraseña });

    if (usuario) {
      res.json({ icon: "✅", mensaje: "Login exitoso" });
    } else {
      res.status(401).json({ icon: "⚠️", mensaje: "Credenciales inválidas" });
    }
  } catch (error) {
    res.status(500).json({ icon: "❌", mensaje: "Error en el servidor", detalle: error.message });
  }
});

module.exports = router;