import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Guide from './pages/Guide';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="brand">Chutazoscraft 2.0</div>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/guia" className="nav-link">Guía</Link>
          <Link to="/tienda" className="nav-link">Tienda</Link>
          <Link to="/perfil" className="nav-link">Mi Perfil</Link>
          
          {/* Enlace externo a Discord */}
          <a 
            href="https://discord.com/invite/EkPvSSAEMj" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link" 
            style={{ color: '#5865F2', fontWeight: '900' }}
          >
            Discord
          </a>
          
          <Link to="/login" className="btn-nav">Iniciar Sesión</Link>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guia" element={<Guide />} />
          <Route path="/tienda" element={<Store />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;