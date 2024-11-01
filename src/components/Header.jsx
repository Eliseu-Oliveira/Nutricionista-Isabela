import React, { useState } from "react";
import "./Header.css";
import logo from '../assets/bg1.png';
import PixPaymentModal from './PixPaymentModal';

const Header = () => {
  const [showPixModal, setShowPixModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const qrCodeSrc = "URL_DO_SEU_QR_CODE";

  const handleCloseModal = () => {
    setShowPixModal(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header" className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span className="doctor-name">Dra. Isabella Sales</span>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#about-section">Apresentação</a></li>
          <li><a href="#services">Especialidades</a></li>
          <li><a href="#metodo">Meu Método</a></li>
        </ul>
      </nav>
      <div className="appointment-btn">
        <a href="#consultation-section" className="btn-agendar">Agendar Consulta <span>→</span></a>
        <button onClick={() => setShowPixModal(true)} className="btn-pagar">Pagar Agora</button>
      </div>

      {showPixModal && <PixPaymentModal onClose={handleCloseModal} qrCodeSrc={qrCodeSrc} />}
    </header>
  );
};

export default Header;
