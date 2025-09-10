import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>correo@littlelemon.com</p>
          <p>+52 999 123 4567</p>
        </div>
        <div className="footer-section">
          <h3>Horario</h3>
          <p>Lunes a Domingo</p>
          <p>12:00 PM - 10:00 PM</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 Little Lemon. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;