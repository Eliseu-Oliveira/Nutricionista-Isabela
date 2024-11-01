import React from "react";
import "./Banner.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Banner = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Nutricionista Especializada em Nutrição Clínica e Comportamental | Nutricionista Isabella Salles</title>
        <meta name="description" content="Consultoria em nutrição clínica e comportamental com foco em hábitos saudáveis e bem-estar. Atendimento presencial em Uberlândia e online para todo o mundo." />
        <meta name="keywords" content="nutricionista, nutrição clínica, hábitos saudáveis, bem-estar, reeducação alimentar, consultas de nutrição online, alimentação equilibrada, saúde, Uberlândia, planejamento alimentar" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nutricionista Especializada em Nutrição Clínica e Comportamental" />
        <meta property="og:description" content="Consultoria em nutrição com foco na reeducação alimentar, saúde e bem-estar. Atendimento em Uberlândia e online." />
        <meta property="og:image" content="https://nutricionistaisabella.netlify.app" />
        <meta property="og:url" content="https://nutricionistaisabella.netlify.app" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nutricionista Especializada em Nutrição Clínica e Comportamental" />
        <meta name="twitter:description" content="Consultoria em nutrição com foco na reeducação alimentar, saúde e bem-estar. Atendimento em Uberlândia e online." />
        <meta name="twitter:image" content="https://nutricionistaisabella.netlify.app" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
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
    </HelmetProvider>
  );
};

export default Banner;
