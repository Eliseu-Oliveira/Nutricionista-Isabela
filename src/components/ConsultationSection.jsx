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
        <div class="consultation-wrapper">
    <div class="consultation-box">
        <h3 class="title-consultation">CONSULTA PRESENCIAL:</h3>
        <p class="consultation-content">
            O valor do seu investimento é de <span className='price'>R$ 380,00</span> para a primeira consulta 
            e as próximas (se agendadas dentro do prazo de 30-45 dias após a primeira) 
            saem no valor de <span className='price'>R$250,00</span> (com um novo exame de bioimpedância).
        </p>
    </div>

    <div class="consultation-box">
        <h3 class="title-consultation">CONSULTA ONLINE:</h3>
        <p class="consultation-content">
            O valor do seu investimento é de <span className='price'>R$ 300,00</span>  para a primeira consulta 
            e as próximas (se agendadas dentro do prazo de 30-45 dias após a primeira) 
            saem no valor de <span className='price'>R$220,00</span> .
        </p>
    </div>
</div>

            <p className="consultation-description">
                Se desejar fazer somente a avaliação física (com ou sem a bioimpedância): investimento de 100,00
            </p>

        </div>
        <button className="consultation-button" onClick={handleButtonClick}>
        Quero fazer o acompanhamento <span className="arrow">→</span>
        </button>
    </div>
</section>

    );
};

export default ConsultationSection;
