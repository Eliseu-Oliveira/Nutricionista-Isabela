import React, { useState } from 'react';
import './Depoimentos.css';
import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpg';
import foto3 from '../assets/foto3.jpg';

const Depoimentos = () => {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [animacao, setAnimacao] = useState('');

  const depoimentos = [
    {
      nome: 'Leiri Vasconcelos',
      texto: 'Nutricionista Dra Camila me fez enxergar alguns erros na minha rotina alimentar diária, me fez uma reeducação alimentar para vida sendo possível seguir dentro das minhas preferências e hábitos.',
      foto: foto1,
    },
    {
      nome: 'Danielle Ramos',
      texto: 'Excelente profissional. Dra Camila é a melhor nutri se você está buscando um estilo de vida mais saudável. Gratidão Dra.',
      foto: foto2,
    },
    {
      nome: 'Cintia Santos',
      texto: 'Dr. Camila se tornou uma amiga conforme fui passando em consulta com ela. Nas consultas, sempre buscando descomplicar nossa alimentação ensinando que pode ser gostoso se alimentar com comida de verdade.',
      foto: foto3,
    },
    {
      nome: 'Cintia Santos',
      texto: 'Outro comentário da Cintia.',
      foto: foto3,
    },
    {
      nome: 'Cintia Santos',
      texto: 'Mais um comentário da Cintia.',
      foto: foto3,
    }
  ];

  const comentariosPorPagina = 3;
  const numeroDePaginas = Math.ceil(depoimentos.length / comentariosPorPagina);

  const exibirComentarios = depoimentos.slice(
    paginaAtual * comentariosPorPagina,
    (paginaAtual + 1) * comentariosPorPagina
  );

  const mudarPagina = (indice) => {
    if (indice !== paginaAtual) {
      setAnimacao('fade-out');
      setTimeout(() => {
        setPaginaAtual(indice);
        setAnimacao('fade-in');
      }, 500); // Aguardar 500ms para a animação de fade-out
      setTimeout(() => setAnimacao(''), 1000); // Remover a animação após 1 segundo
    }
  };

  return (
    <section className="depoimentos-section">
      <div className="depoimentos-heading">
        <p className="small-heading">| DEPOIMENTOS</p>
        <h2>O que os meus clientes dizem?</h2>
        <p>Venha mudar a sua vida, assim como eles fizeram.</p>
      </div>

      <div className="depoimentos-container">
        {exibirComentarios.map((depoimento, index) => (
          <div className={`depoimento-item ${animacao}`} key={index}>
            <div className="depoimento-header">
              <img src={depoimento.foto} alt={depoimento.nome} className="depoimento-avatar" />
              <div>
                <h3>{depoimento.nome}</h3>
                <p>★★★★★</p>
              </div>
            </div>
            <p className="depoimento-texto">{depoimento.texto}</p>
          </div>
        ))}
      </div>

      <div className="depoimentos-paginacao">
        {[...Array(numeroDePaginas)].map((_, index) => (
          <span
            key={index}
            className={`ponto ${paginaAtual === index ? 'ativo' : ''}`}
            onClick={() => mudarPagina(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Depoimentos;
