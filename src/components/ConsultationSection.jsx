import React from 'react';
import "./ConsultationSection.css"; // Certifique-se de criar este arquivo CSS
import consultationImage from '../assets/bg-2.jpg'; // Caminho para a imagem

const ConsultationSection = () => {
    const handleButtonClick = () => {
        const phoneNumber = "+553497797159"; // Insira o número do telefone com o código do país
        const message = "Olá! Gostaria de mais informações sobre a sua Consulta";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    };

    return (
        <section id="consultation-section" className="consultation-section">
            <div className="consultation-box">
                <img src={consultationImage} alt="Consulta Nutricional" className="consultation-image" />
                <div className="consultation-bg">
                    <h3 className="consultation-title">
                        Consulta Nutricional - 2 Meses - <span className="price">R$ 650,00</span>
                    </h3>
                    <p className="consultation-description">
                        Consulta + Bioimpedância + retorno e acompanhamento online de 60 dias por WhatsApp.
                    </p>
                </div>
                <button className="consultation-button" onClick={handleButtonClick}>
                    Quero o Acompanhamento de 2 Meses <span className="arrow">→</span>
                </button>
            </div>
        </section>
    );
};

export default ConsultationSection;
