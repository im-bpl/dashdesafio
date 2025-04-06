import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Header.css';

const Header = ({ titulo, semanaAtual, ultimaAtualizacao }) => {
  return (
    <header className="dashboard-header">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="header-left">
            <div className="logo-container">
              <i className="fas fa-chart-line logo-icon"></i>
            </div>
            <h1 className="dashboard-title">{titulo}</h1>
          </Col>
          <Col md={6} className="header-right">
            <div className="week-indicator">
              <span className="week-label">Semana Atual: </span>
              <span className="current-week-highlight">{semanaAtual}</span>
            </div>
            <div className="update-indicator">
              <span className="update-label">Última Atualização: </span>
              <span className="update-date">{ultimaAtualizacao}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
