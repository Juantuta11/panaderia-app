const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Registro
router.post('/registro', async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json({ icon: "✅", mensaje: "Usuario registrado con éxito" });
  } catch (error) {
    res.status(400).json({ icon: "❌", mensaje: "Error al registrar usuario", detalle: error.message });
  }
});

module.exports = router;