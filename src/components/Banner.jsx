import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
<section id="banner" className="banner">
  <div className="banner-content">
    <p className="tagline">| Nutrindo hábitos</p>
    <h1>Nutrição Clínica Comportamental </h1>
    <div className="separator"></div>
    <p>
      Atendimento em Uberlândia presencial ou online para o mundo todo!
      <br /><br />
      Se você quer uma mudança real para a sua vida, não apenas resultados estéticos, mas também uma relação saudável com a comida e uma melhora no seu desempenho físico, venha conhecer meu trabalho!
      <br /><br />
      Vamos promover uma rotina e fazer o seu planejamento para te ajudar a tornar a mudança de estilo de vida ainda mais leve e efetiva.
    </p>
    <p>* Não atendemos convênios, apenas consultas particulares para entregar o melhor para você.</p>

  </div>
  
</section>

  );
};

export default Banner;
