const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Modelo de usuario
const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true }
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

// Registro
router.post('/registro', async (req, res) => {
  try {
    const { nombre, correo, contraseña } = req.body;
    const existe = await Usuario.findOne({ correo });
    if (existe) {
      return res.status(400).json({ icon: '✘', mensaje: 'El correo ya está registrado' });
    }
    const nuevo = new Usuario({ nombre, correo, contraseña });
    await nuevo.save();
    res.json({ icon: '✅', mensaje: 'Usuario registrado con éxito' });
  } catch (err) {
    res.status(500).json({ icon: '✘', mensaje: 'Error al registrar usuario' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { correo, contraseña } = req.body;
    const usuario = await Usuario.findOne({ correo, contraseña });
    if (!usuario) {
      return res.status(400).json({ icon: '✘', mensaje: 'Credenciales inválidas' });
    }
    res.json({ icon: '✅', mensaje: 'Login exitoso' });
  } catch (err) {
    res.status(500).json({ icon: '✘', mensaje: 'Error al iniciar sesión' });
  }
});

module.exports = router;