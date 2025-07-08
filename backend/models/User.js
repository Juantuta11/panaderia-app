<<<<<<< HEAD

const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
=======
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
>>>>>>> daff2edabc7ece5e3685bcd4856c4c51fbde08b8
}, {
  timestamps: true
});

<<<<<<< HEAD
userSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password;
    return ret;
  }
});

module.exports = mongoose.model('User', userSchema);



=======
module.exports = mongoose.model('User', userSchema);
>>>>>>> daff2edabc7ece5e3685bcd4856c4c51fbde08b8
