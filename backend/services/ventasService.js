const Venta = require('../models/Venta');
const Product = require('../models/Product');

async function registrarVenta(data) {
  const { productoId, cantidad } = data;

  const producto = await Product.findById(productoId);
  if (!producto) throw new Error('Producto no encontrado');

  if (producto.stock < cantidad) {
    throw new Error('Stock insuficiente');
  }

  producto.stock -= cantidad;
  await producto.save();

  const nuevaVenta = new Venta({ productoId, cantidad });
  await nuevaVenta.save();

  return { mensaje: 'Venta registrada y stock actualizado' };
}

async function obtenerVentas() {
  const ventas = await Venta.find().sort({ fecha: -1 }).populate('productoId', 'nombre precio');
  return ventas;
}

module.exports = {
  registrarVenta,
  obtenerVentas,
};
