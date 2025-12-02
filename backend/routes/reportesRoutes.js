const express = require('express');
const { reportesVentasDia } = require('../controllers/reportesController');

const router = express.Router();

router.get('/reportes/ventas-dia', reportesVentasDia);

module.exports = router;
