import React from "react";
import "./Features.css";
import { FaUserFriends, FaTrophy, FaLaptopMedical, FaClipboardCheck } from 'react-icons/fa';
import { CgGym } from "react-icons/cg";

const Features = () => {
  return (
    <div id="features" className="features-container">
      <div className="feature-item">
        <FaUserFriends className="feature-icon" />
        <h3>Mais de 500 pacientes atendidos</h3>
      </div>
      <div>|</div>
      <div className="feature-item">
        <CgGym className="feature-icon" />
        <h3>Resultados em pouco tempo de acompanhamento</h3>
      </div>
      <div>|</div>
      <div className="feature-item">
        <FaLaptopMedical className="feature-icon" />
        <h3>Acompanhamento online durante todo o tratamento</h3>
      </div>
      <div>|</div>
      <div className="feature-item">
        <FaClipboardCheck className="feature-icon" />
        <h3>Avaliação física com bioimpedância</h3>
      </div>
    </div>
  );
};

export default Features;
