<<<<<<< HEAD
=======
// db.js
>>>>>>> daff2edabc7ece5e3685bcd4856c4c51fbde08b8
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let db;

async function connectDB() {
<<<<<<< HEAD
  try {
    await client.connect();
    db = client.db('panaderia'); 
    console.log('✅ Conectado a MongoDB');
  } catch (err) {
    console.error('❌ Error al conectar:', err.message);
  }
}

function getDB() {
  if (!db) throw new Error('La base de datos no ha sido conectada aún.');
=======
  await client.connect();
  db = client.db('nombre_de_tu_base_de_datos');
  console.log('✅ Conectado a MongoDB');
}

function getDB() {
>>>>>>> daff2edabc7ece5e3685bcd4856c4c51fbde08b8
  return db;
}

module.exports = { connectDB, getDB };
<<<<<<< HEAD

=======
>>>>>>> daff2edabc7ece5e3685bcd4856c4c51fbde08b8
