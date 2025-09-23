 const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Asegúrate de tener este modelo creado

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await User.findOne({ email });
    if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) return res.status(401).json({ mensaje: 'Contraseña incorrecta' });

    res.status(200).json({
      mensaje: 'Login exitoso',
      usuario: {
        _id: usuario._id,
        email: usuario.email,
        nombre: usuario.nombre
      }
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error en el servidor', error });
  }
});

module.exports = router;
