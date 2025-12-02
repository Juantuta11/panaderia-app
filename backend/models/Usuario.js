const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    unique: true,
    trim: true,
    minlength: [3, 'El nombre debe tener al menos 3 caracteres']
  },
  correo: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    unique: true,
    trim: true
  },
  contraseña: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
    minlength: [4, 'La contraseña debe tener al menos 4 caracteres']
  },
  creadoEn: {
    type: Date,
    default: Date.now
  }
});

// Evita doble registro del modelo si ya existe
module.exports = mongoose.models.Usuario || mongoose.model('Usuario', UsuarioSchema);