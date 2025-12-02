function Login() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ color: '#6b4c3b' }}>Acceso al sistema</h2>
      <input type="text" placeholder="Usuario" style={{ margin: '0.5rem', padding: '0.5rem' }} />
      <input type="password" placeholder="Contraseña" style={{ margin: '0.5rem', padding: '0.5rem' }} />
      <button style={{ backgroundColor: '#6b4c3b', color: '#fff', padding: '0.5rem 1rem', border: 'none' }}>
        Ingresar
      </button>
    </div>
  );
}
export default Login;