import React, { useState } from 'react';
import './PaymentSection.css';
// Importe o SDK do Mercado Pago (inclusão via CDN ou npm/yarn)

const PaymentSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePayment = (event) => {
    event.preventDefault();
    // Lógica para processar o pagamento com Mercado Pago
  };

  return (
    <div className="payment-container">
      <button onClick={() => setShowModal(true)} className="pay-button">
        Pagar Agora
      </button>

      {showModal && (
        <div className="payment-modal">
          <div className="modal-content">
            <span onClick={() => setShowModal(false)} className="close-modal">&times;</span>
            <h3>Finalizar Pagamento</h3>
            <form onSubmit={handlePayment}>
              <div className="form-group">
                <label htmlFor="cardNumber">Número do Cartão</label>
                <input type="text" id="cardNumber" name="cardNumber" required />
              </div>
              <div className="form-group">
                <label htmlFor="expiryDate">Validade</label>
                <input type="text" id="expiryDate" name="expiryDate" required />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" required />
              </div>
              <button type="submit" className="submit-button">Confirmar Pagamento</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentSection;
