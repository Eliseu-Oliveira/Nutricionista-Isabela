import React from 'react';
import TreatmentCategory from './TreatmentCategory';
import "./TreatmentCategory.css";

function App() {
  const treatmentCategories = [
    {
      title: 'Alergias',
      description: 'Rinite, sinusite, bronquite, asma, dermatites, urticárias.',
      buttonText: 'Quero esse tratamento',
    },
    // ... outros objetos para as demais categorias
  ];

  return (
    <div className="app">
      <h1>Conheça todas as disfunções que eu posso te ajudar a tratar</h1>
      <div className="categories-container">
        {treatmentCategories.map((category, index) => (
          <TreatmentCategory key={index} {...category} />
        ))}
      </div>
    </div>
  );
}

export default App;