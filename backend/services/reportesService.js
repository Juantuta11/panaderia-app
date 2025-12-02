const { getDB } = require('../db');

async function obtenerVentasPorDia() {
  const db = getDB();
  const resultados = await db.collection('ventas').aggregate([
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$fecha" } },
        totalVentas: { $sum: "$total" },
        cantidadVentas: { $sum: 1 }
      }
    },
    { $sort: { _id: -1 } }
  ]).toArray();

  return resultados;
}

module.exports = { obtenerVentasPorDia };
