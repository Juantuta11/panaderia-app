const { registrarVenta, obtenerVentas } = require('../services/ventasService');

const crearVenta = async (req, res) => {
  try {
    const nuevaVenta = await registrarVenta(req.body);
    res.status(201).json(nuevaVenta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const listarVentas = async (req, res) => {
  try {
    const ventas = await obtenerVentas();
    res.json(ventas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { crearVenta, listarVentas };
