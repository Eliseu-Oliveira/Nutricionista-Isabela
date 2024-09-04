import React from 'react';
import './PixPaymentModal.css'; // Crie um arquivo CSS para este componente
import qrCodeImage from '../assets/qrcode1.png';


const PixPaymentModal = ({ onClose, qrCodeSrc }) => {
  return (
    <div className="pix-payment-modal">
      <div className="modal-content">
        <span onClick={onClose} className="close-modal">&times;</span>
        <h3>Pagamento via Pix</h3>
        <img src={qrCodeImage} alt="QR Code Pix" className="qr-code-image" />
        <p>Escaneie o código para realizar o pagamento.</p>
        <p>Ou se preferir utilize o codigo abaixo:</p>
        <p>00020126330014br.gov.bcb.pix0111069784656315204000053039865802BR5901N6001C62070503***6304B047</p>
      </div>
    </div>
  );
};

export default PixPaymentModal;
