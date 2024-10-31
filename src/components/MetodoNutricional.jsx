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
      title: "Nossa conversa",
      description: "No primeiro momento vamos bater um papo e vou conhecer mais sobre seu estilo de vida, seus hábitos alimentares, sintomas atuais, principais queixas, histórico de doenças, preferências e rejeições alimentares, alergias, costumes de horários e dia a dia, afim de achar a melhor forma de encaxair um plano alimentar na sua rotina.",
      imgSrc: imgConversa
    },
    {
      title: "Avaliação física",
      description: "A avaliação da composição corporal é feita com adipômetro, fita, estadiômetro, balança e balança de bioimpedância. Estimando a massa muscular e gordura corporal do paciente para compararmos os resultados e ver sua evolução.",
      imgSrc: imgAvaliacao
    },
    {
      title: "Exames laboratoriais",
      description: "É feita a solicitação de exames completos de forma individualizada e essenciais para investigar qualquer pequena alteração em seu organismo que possa estar te prejudicando, e baseada nos resultados, vemos a necessidade de suplementação.",
      imgSrc: imgExames
    },
    {
      title: "Planejamento",
      description: "Depois disso vamos montar juntos o seu plano alimentar, de forma totalmente INDIVIDUALIZADA e também com opções viáveis, adequando a sua realidade e ao seu objetivo.",
      imgSrc: imgPlanejamento
    },
    {
      title: "Acompanhamento",
      description: "Durante o tratamento todo você pode entrar em contato comigo via Whatsapp, em horário comercial, de segunda a sábado, para que eu possa te ajudar com dúvidas, escolhas, análise dos seus exames laboratoriais, pequenos ajustes na alimentação e claro, e saber como você está indo nessa nova fase.",
      imgSrc: imgAcompanhamento
    },
    {
      title: "O momento da segunda consulta",
      description: "Por fim, após 30-45 dias da primeira consulta, marcamos a segunda, para fazer avaliação física novamente com um novo exame de bioimpedância, para vermos a evolução e ajustarmos expectativas e táticas novas se necessário, de acordo com o resultado. Essa segunda consulta, se feita dentro do pe´riodo de 30-45 dias após a primeira, ela tem um valor reduzido, em relação a primeira, mas se for passado desse período, é cobrado o valor integral, sem desconto.",      imgSrc: imgRetorno
    }
  ];


  return (
    <section id="metodo" className="metodo-nutricional">
      <div className="metodo-header">
      <p>| MINHA CONSULTA</p>
      <h2>Entenda como funciona o meu acompanhemento</h2>
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
