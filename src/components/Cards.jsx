import React from "react";
import "./Cards.css";

const Cards = () => {
    return (
        <section id="cards-section" className="cards-section">
            {/* Texto de Especialidades */}
            <div id="services" className="specialties-header">
                <h2>| MINHAS ESPECIALIDADES |</h2>
                <p>Conheça todas as disfunções que eu posso te ajudar a tratar</p>
            </div>

            <div className="cards-container">
                {/* Primeira Linha de Cards */}
                <div className="card">
                    <div className="card-image">
                        <img src="../assets/image1.jpg" alt="Card 1" />
                    </div>
                    <div className="card-content">
                        <h3>Título do Card 1</h3>
                        <p>Descrição do card 1.</p>
                        <button>Saiba Mais</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src="../assets/image2.jpg" alt="Card 2" />
                    </div>
                    <div className="card-content">
                        <h3>Título do Card 2</h3>
                        <p>Descrição do card 2.</p>
                        <button>Saiba Mais</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src="../assets/image3.jpg" alt="Card 3" />
                    </div>
                    <div className="card-content">
                        <h3>Título do Card 3</h3>
                        <p>Descrição do card 3.</p>
                        <button>Saiba Mais</button>
                    </div>
                </div>
            </div>

            {/* Segunda Linha de Cards */}
            <div className="cards-container">
                <div className="card">
                    <div className="card-image">
                        <img src="../assets/image4.jpg" alt="Card 4" />
                    </div>
                    <div className="card-content">
                        <h3>Título do Card 4</h3>
                        <p>Descrição do card 4.</p>
                        <button>Saiba Mais</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src="../assets/image5.jpg" alt="Card 5" />
                    </div>
                    <div className="card-content">
                        <h3>Título do Card 5</h3>
                        <p>Descrição do card 5.</p>
                        <button>Saiba Mais</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src="../assets/image6.jpg" alt="Card 6" />
                    </div>
                    <div className="card-content">
                        <h3>Título do Card 6</h3>
                        <p>Descrição do card 6.</p>
                        <button>Saiba Mais</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Cards;