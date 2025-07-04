const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let db;

async function connectDB() {
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
  return db;
}

module.exports = { connectDB, getDB };

