const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Modelo de producto
const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true }
});

const Producto = mongoose.model('Producto', ProductoSchema);

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ icon: '✘', mensaje: 'Error al obtener productos' });
  }
});

// Agregar producto
router.post('/', async (req, res) => {
  try {
    const nuevo = new Producto(req.body);
    await nuevo.save();
    res.json({ icon: '✅', mensaje: 'Producto agregado con éxito' });
  } catch (err) {
    res.status(500).json({ icon: '✘', mensaje: 'Error al agregar producto' });
  }
});

// Eliminar producto
router.delete('/:id', async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ icon: '✅', mensaje: 'Producto eliminado con éxito' });
  } catch (err) {
    res.status(500).json({ icon: '✘', mensaje: 'Error al eliminar producto' });
  }
});

module.exports = router;