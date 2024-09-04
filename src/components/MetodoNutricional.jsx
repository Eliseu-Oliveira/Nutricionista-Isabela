import React from "react";
import "./MetodoNutricional.css";

// Importe suas imagens
import imgConversa from "../assets/conversa.jpg";
import imgAvaliacao from "../assets/avaliacao.jpg";
import imgExames from "../assets/exames.jpg";
import imgPlanejamento from "../assets/planejamento.jpg";
import imgAcompanhamento from "../assets/acompanhamento.jpg";
import imgRetorno from "../assets/retorno.jpg";

const MetodoNutricional = () => {
  const steps = [
    {
      title: "Conversa",
      description: "Vou conhecer mais sobre seu estilo de vida, seus hábitos alimentares, sintomas, histórico de doenças, preferências alimentares, tudo no detalhe.",
      imgSrc: imgConversa
    },
    {
      title: "Avaliação",
      description: "Avaliação da composição corporal, estimando a massa magra, gordura corporal, água corporal total e outros dados.",
      imgSrc: imgAvaliacao
    },
    {
      title: "Exames",
      description: "Solicitação de exames completos de forma individualizada e essenciais para investigar qualquer pequena alteração em seu organismo que possa estar te prejudicando de alguma forma.",
      imgSrc: imgExames
    },
    {
      title: "Planejamento",
      description: "Depois disso vamos montar juntos o seu plano alimentar, de forma totalmente INDIVIDUALIZADA e também com opções viáveis e combinadas em conjunto.",
      imgSrc: imgPlanejamento
    },
    {
      title: "Acompanhamento",
      description: "Durante o tratamento todo você pode entrar em contato comigo por Whatsapp, 24h por dia, para que eu possa te ajudar com dúvidas e escolhas.",
      imgSrc: imgAcompanhamento
    },
    {
      title: "Retorno",
      description: "Por fim, a avaliação dos resultados dos exames, suplementação individualizada de acordo com os exames, também nova biompedância.",
      imgSrc: imgRetorno
    }
  ];

  return (
    <section id="metodo" className="metodo-nutricional">
      <div className="metodo-header">
        <p>| MEU MÉTODO</p>
        <h2>Entenda como funciona o meu Método de Nutrição Funcional</h2>
      </div>
      <div className="metodo-grid">
        {steps.map((step, index) => (
          <div className="metodo-item" key={index}>
            <img src={step.imgSrc} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetodoNutricional;
