const { getDB } = require('../db');


async function registrarVenta(ventaData) {
  const db = getDB();
  const resultado = await db.collection('ventas').insertOne(ventaData);
  return resultado.ops?.[0] || ventaData; 
}


async function obtenerVentas() {
  const db = getDB();
  const ventas = await db.collection('ventas').find().sort({ fecha: -1 }).toArray();
  return ventas;
}

module.exports = {
  registrarVenta,
  obtenerVentas,
};
