const express = require('express');
const router = express.Router();
const Venta = require('../models/Venta');
const Producto = require('../models/Producto');

console.log('📦 Archivo ventas.js cargado');

// 📌 Registrar una venta
router.post('/', async (req, res) => {
  try {
    const { producto, cantidad } = req.body;
    if (!producto || isNaN(cantidad)) {
      return res.status(400).json({ error: 'Datos inválidos' });
    }

    const nueva = new Venta({
      producto,
      cantidad: parseInt(cantidad)
    });

    await nueva.save();
    res.json(nueva);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar la venta' });
  }
});

// 📌 Obtener historial completo
router.get('/', async (req, res) => {
  try {
    const ventas = await Venta.find();
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ventas' });
  }
});

// 📌 Obtener totales por producto (usando MongoDB aggregation)
router.get('/totales', async (req, res) => {
  try {
    const resumen = await Venta.aggregate([
      {
        $group: {
          _id: '$producto',
          totalCantidad: { $sum: '$cantidad' }
        }
      },
      {
        $project: {
          producto: '$_id',
          totalCantidad: 1,
          _id: 0
        }
      }
    ]);
    res.json(resumen);
  } catch (error) {
    res.status(500).json({ error: 'Error al calcular totales' });
  }
});

// 📌 Calcular total general en pesos
router.get('/total-general', async (req, res) => {
  try {
    const ventas = await Venta.find();
    const productos = await Producto.find();

    let total = 0;

    ventas.forEach(v => {
      const p = productos.find(prod => prod.nombre === v.producto);
      if (p) {
        total += v.cantidad * p.precio;
      }
    });

    res.json({ total });
  } catch (error) {
    res.status(500).json({ error: 'Error al calcular el total general' });
  }
});

// 📌 Resumen por producto (sin aggregation)
router.get('/resumen-productos', async (req, res) => {
  try {
    const ventas = await Venta.find();
    const resumen = [];

    ventas.forEach(v => {
      const existente = resumen.find(r => r.producto === v.producto);
      if (existente) {
        existente.totalCantidad += v.cantidad;
      } else {
        resumen.push({ producto: v.producto, totalCantidad: v.cantidad });
      }
    });

    console.log('🧮 Totales calculados:', resumen);
    res.json(resumen);
  } catch (error) {
    res.status(500).json({ error: 'Error al generar el resumen' });
  }
});

// 📌 Editar una venta
router.put('/:id', async (req, res) => {
  try {
    const actualizada = await Venta.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al editar la venta' });
  }
});

// 📌 Eliminar una venta
router.delete('/:id', async (req, res) => {
  try {
    await Venta.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Venta eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la venta' });
  }
});

// 📌 Rutas de prueba
router.get('/test', (req, res) => {
  res.json({ mensaje: 'Ruta de prueba activa' });
});

router.get('/test-total', (req, res) => {
  res.json({ mensaje: 'Ruta /test-total activa' });
});

module.exports = router;
module.exports = router;