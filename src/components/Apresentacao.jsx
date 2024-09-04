import React from "react";
import "./Apresentacao.css";
import fotoNutricionista from "../assets/bgg1.jpg"; // Importe sua imagem

const Apresentacao = () => {
    return (
        <section id="about-section" className="about-section"> {/* Adicionei o ID aqui */}
            <div className="about-container">
                <div className="about-image-container">
                    <div className="about-image-background"></div>
                    <img src={fotoNutricionista} alt="Dra. Isabella Sales" className="about-image" />
                </div>
                <div className="about-info">
                    <div className="about-heading">
                        <p className="small-heading">| APRESENTAÇÃO</p>
                        <h2>Prazer, Dra. Isabella Sales!</h2>
                    </div>
                    <p>Primeiramente para quem não me conhece, sou nutricionista pós-graduada em nutrição funcional, fitoterapia funcional e também cursando a pós-graduação em fertilidade integrativa, voltada para a saúde da mulher.</p>
                    <p>Trabalho de forma totalmente individualizada, visando RECUPERAR seu organismo, devolver vitalidade e energia acima de tudo. Pois quero que você viva muito e sem DORES OU DESCONFORTOS.</p>
                    <p>Tenho como experiência o atendimento de mais de 2 mil pacientes e ainda me atualizo constantemente com cursos, congressos e especializações.</p>
                </div>
            </div>
        </section>
    );
};

export default Apresentacao;
