import '../styles/AboutUs.css';
import frescuraImg from '../assets/frescura.jpg';
import pasionImg from '../assets/pasion.jpg';
import comunidadImg from '../assets/comunidad.jpg';

function AboutUs() {
  return (
    <section className="about-container">
      <h1>Sobre Nosotros</h1>
      <p>
        En <strong>Little Lemon</strong>, creemos que la comida no solo alimenta el cuerpo, sino también el alma.
        Somos un equipo apasionado por la cocina mediterránea, comprometido con ingredientes frescos, recetas auténticas
        y una experiencia inolvidable para cada cliente.
      </p>
      <div className="about-values">
        <div className="value-card">
          <img src={frescuraImg} alt="Ingredientes frescos" />
          <h3>🌿 Frescura</h3>
          <p>Usamos ingredientes locales y de temporada para garantizar sabor y calidad.</p>
        </div>
        <div className="value-card">
          <img src={pasionImg} alt="Chef cocinando con pasión" />
          <h3>👨‍🍳 Pasión</h3>
          <p>Nuestros chefs viven para crear platos que sorprenden y deleitan.</p>
        </div>
        <div className="value-card">
          <img src={comunidadImg} alt="Conexión con la comunidad" />
          <h3>🤝 Comunidad</h3>
          <p>Nos encanta conectar con nuestros clientes y apoyar a productores locales.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;