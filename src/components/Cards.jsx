import React, { useState } from "react";
import "./Cards.css";

// importe suas imagens 
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
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
        { id: 2, title: "Intestino preso?", description: "Liberte-se do desconforto, inchaço e gases.", image: image2 },
        { id: 3, title: "Emagrecimento saudável", description: "Perdendo gordura com equilibrio e sem sofrimento.", image: image3 },
        { id: 4, title: "Ganho de massa muscular", description: "Melhora de força, definição e performance.", image: image4 },
        { id: 5, title: "Comportamento alimentar e saúde mental", description: "A conexão entre alimentação e equilíbrio emocional.", image: image5 },
        { id: 6, title: "Saúde da Mulher", description: "Como cuidar do corpo em cada fase da vida.", image: image6 }
    ];

            //         {/* Primeira Linha de Cards */}
            //         <div className="card">
            //         <div className="card-image">
            //             <img src="../assets/image1.jpg" alt="Card 1" />
            //         </div>
            //         <div className="card-content">
            //             <h3>Reeducação alimentar na prática</h3>
            //             <p>Alimentação adequada para a sua rotina.</p>
            //             <button>Saiba Mais</button>
            //         </div>
            //     </div>

            //     <div className="card">
            //         <div className="card-image">
            //             <img src="../assets/image2.jpg" alt="Card 2" />
            //         </div>
            //         <div className="card-content">
            //             <h3>Intestino preso?</h3>
            //             <p>Liberte-se do desconforto, inchaço e gases.</p>
            //             <button>Saiba Mais</button>
            //         </div>
            //     </div>

            //     <div className="card">
            //         <div className="card-image">
            //             <img src="../assets/image3.jpg" alt="Card 3" />
            //         </div>
            //         <div className="card-content">
            //             <h3>Emagrecimento saudável</h3>
            //             <p>Perdendo gordura com equilibrio e sem sofrimento.</p>
            //             <button>Saiba Mais</button>
            //         </div>
            //     </div>
            // </div>

            // {/* Segunda Linha de Cards */}
            // <div className="cards-container">
            //     <div className="card">
            //         <div className="card-image">
            //             <img src="../assets/image4.jpg" alt="Card 4" />
            //         </div>
            //         <div className="card-content">
            //             <h3>Ganho de massa muscular</h3>
            //             <p>Melhora de força, definição e performance.:</p>
            //             <button>Saiba Mais</button>
            //         </div>
            //     </div>

            //     <div className="card">
            //         <div className="card-image">
            //             <img src="../assets/image5.jpg" alt="Card 5" />
            //         </div>
            //         <div className="card-content">
            //             <h3>Comportamento alimentar e saúde mental</h3>
            //             <p>A conexão entre alimentação e equilíbrio emocional.</p>
            //             <button>Saiba Mais</button>
            //         </div>
            //     </div>

            //     <div className="card">
            //         <div className="card-image">
            //             <img src="../assets/image6.jpg" alt="Card 6" />
            //         </div>
            //         <div className="card-content">
            //             <h3>Saúde da Mulher</h3>
            //             <p>Como cuidar do corpo em cada fase da vida.</p>


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
                descriptioncomplete={selectedCard.descriptioncomplete}
                image={selectedCard.image}
            />
        </section>
    );
};

export default Cards;
