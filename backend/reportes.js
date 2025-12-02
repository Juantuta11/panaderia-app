const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Modelo de reporte
const ReporteSchema = new mongoose.Schema({
  producto: { type: String, required: true },
  cantidad: { type: Number, required: true },
  total: { type: Number, required: true }
});

const Reporte = mongoose.model('Reporte', ReporteSchema);

// Obtener todos los reportes
router.get('/', async (req, res) => {
  try {
    const reportes = await Reporte.find();
    res.json(reportes);
  } catch (err) {
    res.status(500).json({ icon: '✘', mensaje: 'Error al obtener reportes' });
  }
});

// Agregar reporte
router.post('/', async (req, res) => {
  try {
    const nuevo = new Reporte(req.body);
    await nuevo.save();
    res.json({ icon: '✅', mensaje: 'Reporte agregado con éxito' });
  } catch (err) {
    res.status(500).json({ icon: '✘', mensaje: 'Error al agregar reporte' });
  }
});

module.exports = router;