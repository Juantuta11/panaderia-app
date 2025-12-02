import { Routes, Route, Link } from 'react-router-dom';
import Bienvenida from './pages/Bienvenida.jsx';
import Ventas from './pages/Ventas.jsx';
import Inventario from './pages/Inventario.jsx';
import Login from './pages/Login.jsx';
import Reportes from './pages/Reportes.jsx';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fffbe6', minHeight: '100vh' }}>
      <nav style={{ backgroundColor: '#6b4c3b', padding: '1rem' }}>
        <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Bienvenida</Link>
        <Link to="/ventas" style={{ color: '#fff', marginRight: '1rem' }}>Ventas</Link>
        <Link to="/inventario" style={{ color: '#fff', marginRight: '1rem' }}>Inventario</Link>
        <Link to="/login" style={{ color: '#fff', marginRight: '1rem' }}>Login</Link>
        <Link to="/reportes" style={{ color: '#fff' }}>Reportes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    </div>
  );
}

export default App;