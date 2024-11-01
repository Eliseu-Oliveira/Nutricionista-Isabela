import React from "react";
import "./Apresentacao.css";
import fotoNutricionista from "../assets/bgg5.jpg"; // Importe sua imagem

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
                    <p>Primeiramente para quem não me conhece, meu nome é Isabella Sales, sou nutricionista formada pela Universidade Federal de Uberlândia, finalizei minha gradução em 2021, em meio a pandemia. Desde então, tenho me dedicado a transformar a relação das pessoas com a alimentação e auxiliar no alcance de suas metas físicas e de saúde.</p>
                    <p>Trabalho de forma totalmente individualizada, cada paciente é único, cada tratamento é feito visando recuperar seu organismo, devolver vitalidade, energia e acima de tudo mudar o modo como você vê a sua alimentação.</p>
                    <p> Por aqui, já são mais de 500 pessoas que tiveram a possibilidade de ter a vida transformada por meio de uma alimentação mais consciente, e claro, com a ajuda de uma profissicional que entende você!.</p>

                </div>
            </div>
        </section>
    );
};

export default Apresentacao;
