 
const express = require('express');
const router = express.Router();
const { crearVenta, listarVentas } = require('../controllers/ventasController');

router.post('/', crearVenta);
router.get('/', listarVentas);

module.exports = router;
