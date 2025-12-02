const { obtenerVentasPorDia } = require('../services/reportesService');

const reportesVentasDia = async (req, res) => {
  try {
    const reporte = await obtenerVentasPorDia();
    res.json(reporte);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { reportesVentasDia };
