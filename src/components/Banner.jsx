import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
<section id="banner" className="banner">
  <div className="banner-content">
    <p className="tagline">| Cuidando da Sua Saúde</p>
    <h1>Nutrição e Comportamento Alimentar</h1>
    <div className="separator"></div>
    <p>
      Atendimento em Uberlândia presencial ou Online para o mundo todo
      <br /><br />
      Meu objetivo é te ajudar a emagrecer, ter vitalidade e mais energia. Tratar o organismo como um todo e recuperar sua saúde. Sou proprietária da clínica Be Natural, um espaço de estética natural e saúde, com isso desenvolvi uma metodologia própria para ajudar você a recuperar a autoestima e o autocuidado.
      <br /><br />
      Também vou cuidar da sua rotina e do seu planejamento e te ajudar a tornar a mudança de estilo de vida ainda mais leve e efetiva.
    </p>
    <p>* Não atendemos convênios</p>
  </div>
  
</section>

  );
};

export default Banner;
