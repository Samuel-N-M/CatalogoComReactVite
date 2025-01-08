import { FaGooglePlay, FaApple } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Seção Baixe nosso Aplicativo */}
        <div className="footer-section">
          <h3 className="footer-title poppins-semibold">
            Baixe nosso Aplicativo
          </h3>
          <p className="footer-text">
            Baixe nossa aplicação para Android e iOS
          </p>
          <div className="footer-buttons">
            <button className="download-btn">
              <FaGooglePlay className="icon" /> Android
            </button>
            <button className="download-btn">
              <FaApple className="icon" /> iOS
            </button>
          </div>
        </div>

        {/* Seção Logo */}
        <div className="footer-section">
          <h3 className="footer-logo poppins-semibold">Logo</h3>
          <p className="footer-text">
            Lorem ipsum dolor sit amet. Et voluptas enim sed internos amet ad
            doloremque amet.
          </p>
        </div>

        {/* Seção Links Úteis */}
        <div className="footer-section">
          <h3 className="footer-title poppins-semibold">Links úteis</h3>
          <ul className="footer-links">
            <li>Políticas de Privacidade</li>
            <li>Sobre nós</li>
            <li>Ajuda</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>Copyright 2024 - Goodgroup - Todos direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
