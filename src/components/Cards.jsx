import React, { useState } from "react";
import "./Cards.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

// Componente Modal
const Modal = ({ isOpen, onClose, title, description, image }) => {
    if (!isOpen) return null;

    return (
        <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <div className="modal-body">
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                    <p>{description}</p>
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
        { id: 1, title: "Título do Card 1", description: "Descrição do card 1.", image: image1 },
        { id: 2, title: "Título do Card 2", description: "Descrição do card 2.", image: image2 },
        { id: 3, title: "Título do Card 3", description: "Descrição do card 3.", image: image3 },
        { id: 4, title: "Título do Card 4", description: "Descrição do card 4.", image: image4 },
        { id: 5, title: "Título do Card 5", description: "Descrição do card 5.", image: image5 },
        { id: 6, title: "Título do Card 6", description: "Descrição do card 6.", image: image6 }
    ];

    return (
        <section id="cards-section" className="cards-section">
            {/* Texto de Especialidades */}
            <div id="services" className="specialties-header">
                <h2>| MINHAS ESPECIALIDADES |</h2>
                <p>Conheça todas as disfunções que eu posso te ajudar a tratar</p>
            </div>

            {/* Primeira Linha de Cards */}
            <div className="cards-container">
                {cardsData.slice(0, 3).map((card) => (
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
                description={selectedCard.description}
                image={selectedCard.image}
            />
        </section>
    );
};

export default Cards;
