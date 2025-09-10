import { Link } from 'react-router-dom';
import '../styles/home.css';
import logo from '../assets/restaurante-estilo-mediterraneo.jpg';

function Home() {
  return (
    <section className="home-section">
      <div className="home-text">
        <h1>Reserva tu mesa en <span className="highlight">Little Lemon</span></h1>
        <p>
          Disfruta de nuestra exquisita cocina mediterránea en un ambiente acogedor y familiar.
          Haz tu reserva ahora y asegura tu lugar.
        </p>
        <p>
          <strong>Little Lemon</strong> ofrece la auténtica cocina mediterránea con un toque moderno e innovador.
        </p>
        <Link to="/reservas" className="reserve-button">Haz tu reserva</Link>
      </div>
      <div className="home-image">
        <img src={logo} alt="Little Lemon Logrestaurante-estilo-mediterraneo" className="logo" />
      </div>
    </section>
  );
}

export default Home;