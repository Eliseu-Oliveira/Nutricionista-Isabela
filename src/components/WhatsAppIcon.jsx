import React from 'react';
import whatsappIcon from '../assets/whatsapp-icon.png'; // Certifique-se de usar o caminho correto para o ícone
import './WhatsAppIcon.css';

const WhatsAppIcon = () => {
    const handleClick = () => {
        const phoneNumber = "+553497797159"; // Insira o número de telefone com o código do país
        const message = "Olá! Gostaria de mais informações sobre a sua Consulta";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="whatsapp-icon" onClick={handleClick}>
            <img src={whatsappIcon} alt="WhatsApp" />
        </div>
    );
};

export default WhatsAppIcon;
