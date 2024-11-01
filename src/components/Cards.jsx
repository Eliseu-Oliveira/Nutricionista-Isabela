import React, { useState } from "react";
import "./Cards.css";

// importe suas imagens 
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

// Componente Modal
const Modal = ({ isOpen, onClose, title, description, image, descriptioncomplete }) => {
    if (!isOpen) return null;

    return (
        <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <div className="modal-body">
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                    <p>{descriptioncomplete}</p>
                </div>
            </div>
        </div>
    );
};


const Cards = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Dados dos cards
    const cardsData = [
        { id: 1, title: "Reeducação alimentar na prática", description: "Alimentação adequada para a sua rotina.", image: image1, descriptioncomplete: "Adote uma alimentação equilibrada e personalizada para a sua rotina com a Reeducação Alimentar na Prática.Este programa é desenvolvido para ajudá-lo a transformar seus hábitos alimentares de forma simples e eficaz, respeitando suas necessidades e preferências. Você aprenderá como escolher os alimentos certos, planejar suas refeições e fazer substituições saudáveis, sem abrir mão do prazer de comer bem. Ideal para quem busca melhorar a saúde, aumentar a energia e alcançar um estilo de vida mais saudável de maneira sustentável." },
        { id: 2, title: "Intestino preso?", description: "Liberte-se do desconforto, inchaço e gases.", image: image2, descriptioncomplete: "Se você está lidando com intestino preso, saiba que não está sozinho. Essa condição, também conhecida como constipação, afeta muitas pessoas e pode ser causada por diversos fatores, incluindo dieta inadequada, falta de exercícios e estresse. O intestino preso pode resultar em sintomas desconfortáveis, como inchaço, gases e dor abdominal." },
        { id: 3, title: "Emagrecimento saudável", description: "Perdendo gordura com equilibrio e sem sofrimento.", image: image3, descriptioncomplete: "Emagrecer de forma saudável vai além de apenas reduzir números na balança; trata-se de promover mudanças duradouras no estilo de vida. O foco deve ser na perda de gordura, e não apenas na perda de peso, garantindo que o corpo receba os nutrientes necessários enquanto se torna mais forte e saudável." },
        { id: 4, title: "Ganho de massa muscular", description: "Melhora de força, definição e performance.", image: image4, descriptioncomplete: "O ganho de massa muscular é um objetivo comum para muitas pessoas, seja para melhorar a força, a definição ou a performance atlética. Com uma abordagem correta, é possível aumentar a massa muscular de forma saudável e eficaz." },
        { id: 5, title: "Comportamento alimentar e saúde mental", description: "A conexão entre alimentação e equilíbrio emocional.", image: image5, descriptioncomplete: "A relação entre alimentação e saúde mental é complexa e fundamental para o bem-estar geral. O que comemos pode afetar não apenas nossa saúde física, mas também nosso estado emocional e psicológico. Compreender essa conexão é vital para promover um estilo de vida saudável e equilibrado." },
        { id: 6, title: "Saúde da Mulher", description: "Como cuidar do corpo em cada fase da vida.", image: image6, descriptioncomplete: "A saúde da mulher é um aspecto crucial do bem-estar geral, e cuidar do corpo em cada fase da vida é fundamental para promover a saúde física e emocional. Desde a adolescência até a menopausa, cada fase traz mudanças que requerem atenção e cuidados específicos." }
    ];
    return (
        <section id="cards-section" className="cards-section">
            {/* Texto de Especialidades */}
            <div id="services" className="specialties-header">
                <h2>| TÓPICOS IMPORTANTES |</h2>
                <p>Conheça todas as disfunções que eu posso te ajudar a tratar nessa caminhada</p>
            </div>

            {/* Primeira Linha de Cards */}
            <div className="cards-container">
                {cardsData.slice(0, 3).map((card) => (
                    <div className="card">
                        <div className="card-image">
                            <img src={card.image} alt={card.title} />
                        </div>
                        <div className="card-content">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                            <button onClick={() => handleCardClick(card)}>Saiba Mais</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Segunda Linha de Cards */}
            <div className="cards-container">
                {cardsData.slice(3, 6).map((card) => (
                    <div className="card" key={card.id}>
                        <div className="card-image">
                            <img src={card.image} alt={card.title} />
                        </div>
                        <div className="card-content">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                            <button onClick={() => handleCardClick(card)}>Saiba Mais</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={selectedCard.title}
                descriptioncomplete={selectedCard.descriptioncomplete}
                image={selectedCard.image}
            />
        </section>
    );
};

export default Cards;
