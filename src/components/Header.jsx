import React, { useState } from "react";
import "./Header.css";
import logo from '../assets/bg1.png';
import PixPaymentModal from './PixPaymentModal';


const Header = () => {
  const [showPixModal, setShowPixModal] = useState(false);
  
  // Substitua pela URL da imagem do QR Code que você deseja exibir
  const qrCodeSrc = "URL_DO_SEU_QR_CODE";

  const handleCloseModal = () => {
    setShowPixModal(false);
  };

  return (
    <header id="header" className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span className="doctor-name">Dra. Isabella Sales</span>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#about-section">Apresentação</a></li>
          <li><a href="#services">Especialidades</a></li>
          <li><a href="#metodo">Meu Método</a></li>
          <li><a href="#gallery">Galeria</a></li>
          <li><a href="#map">Depoimentos</a></li>
        </ul>
      </nav>
      <div className="appointment-btn">
        <a href="#consultation-section" className="btn-agendar">Agendar Consulta <span>&rarr;</span></a>
        <button onClick={() => setShowPixModal(true)} className="btn-pagar">Pagar Agora</button>
      </div>

      {/* Modal de Pagamento via PIX */}
      {showPixModal && <PixPaymentModal onClose={handleCloseModal} qrCodeSrc={qrCodeSrc} />}
    </header>
  );
};

export default Header;
