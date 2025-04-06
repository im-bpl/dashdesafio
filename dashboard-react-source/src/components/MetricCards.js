import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './MetricCards.css';

const MetricCards = ({ totalNREs, totalEscolas, totalAlunos, totalProfessores }) => {
  // Função para formatar números com separador de milhar
  const formatarNumero = (numero) => {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="metrics-container">
      <div className="metric-card">
        <h3 className="card-title">Total de NREs</h3>
        <div className="card-value">{totalNREs}</div>
        <div className="card-icon">
          <i className="fas fa-building"></i>
        </div>
      </div>
      
      <div className="metric-card">
        <h3 className="card-title">Total de Escolas</h3>
        <div className="card-value">{totalEscolas}</div>
        <div className="card-icon">
          <i className="fas fa-school"></i>
        </div>
      </div>
      
      <div className="metric-card">
        <h3 className="card-title">Total de Alunos</h3>
        <div className="card-value">{formatarNumero(totalAlunos)}</div>
        <div className="card-icon">
          <i className="fas fa-user-graduate"></i>
        </div>
      </div>
      
      <div className="metric-card">
        <h3 className="card-title">Total de Professores</h3>
        <div className="card-value">{formatarNumero(totalProfessores)}</div>
        <div className="card-icon">
          <i className="fas fa-chalkboard-teacher"></i>
        </div>
      </div>
    </div>
  );
};

export default MetricCards;
