const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

router.post('/', async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar el producto' });
  }
});

module.exports = router;