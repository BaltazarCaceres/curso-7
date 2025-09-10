import { Link } from 'react-router-dom';
import '../styles/header.css';
import logo from '../assets/little-lemon-logo.png';

function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="nav-links">
          <li className="logo-item">
            <Link to="/">
              <img src={logo} alt="Little Lemon Logo" className="logo" />
            </Link>
          </li>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/menu">Menú</Link></li>
          <li><Link to="/reservas">Reservas</Link></li>
          <li><Link to="/nosotros">Sobre Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;