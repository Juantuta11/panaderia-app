<<<<<<< HEAD
const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true }
}, {
  timestamps: true
});
=======
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
>>>>>>> daff2edabc7ece5e3685bcd4856c4c51fbde08b8
