const express = require('express');
const { reportesVentasDia } = require('../controllers/reportesController');

const router = express.Router();

// Ruta para obtener reporte de ventas por día
router.get('/reportes/ventas-dia', reportesVentasDia);

module.exports = router;
