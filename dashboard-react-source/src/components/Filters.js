import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './Filters.css';

const Filters = ({ 
  nres, 
  escolas, 
  onNREChange, 
  onEscolaChange, 
  onLimparFiltros,
  filtroNRE,
  filtroEscola
}) => {
  return (
    <div className="filters-container">
      <Row>
        <Col md={5}>
          <Form.Group className="mb-3">
            <Form.Label>Selecione o NRE:</Form.Label>
            <Form.Select 
              value={filtroNRE || ''}
              onChange={(e) => onNREChange(e.target.value || null)}
              className="filter-dropdown"
            >
              <option value="">Todos os NREs</option>
              {nres.map((nre, index) => (
                <option key={index} value={nre}>{nre}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={5}>
          <Form.Group className="mb-3">
            <Form.Label>Selecione a Escola:</Form.Label>
            <Form.Select 
              value={filtroEscola || ''}
              onChange={(e) => onEscolaChange(e.target.value || null)}
              disabled={!filtroNRE}
              className="filter-dropdown"
            >
              <option value="">Todas as Escolas</option>
              {escolas.map((escola, index) => (
                <option key={index} value={escola}>{escola}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={2} className="d-flex align-items-end mb-3">
          <Button 
            variant="outline-secondary" 
            onClick={onLimparFiltros}
            className="btn-limpar w-100"
          >
            Limpar Filtros
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Filters;
