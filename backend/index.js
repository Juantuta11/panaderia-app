// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

const reportesRoutes = require('./routes/reportesRoutes');
app.use('/api', reportesRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
