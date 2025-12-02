const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

// Crear producto
router.post('/', async (req, res) => {
  try {
    const nuevo = new Producto(req.body);
    await nuevo.save();
    res.json({ mensaje: 'Producto creado', producto: nuevo });
  } catch (err) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
});

// Listar productos
router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

// Actualizar producto
router.put('/:id', async (req, res) => {
  try {
    const actualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ mensaje: 'Producto actualizado', producto: actualizado });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
});

// Eliminar producto
router.delete('/:id', async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
});

module.exports = router;