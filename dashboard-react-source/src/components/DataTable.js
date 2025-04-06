import React from 'react';
import { Table } from 'react-bootstrap';
import './DataTable.css';

const DataTable = ({ escolasMetricas }) => {
  // Função para formatar números com separador de milhar
  const formatarNumero = (numero) => {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Função para formatar percentuais
  const formatarPercentual = (valor) => {
    return `${(valor * 100).toFixed(1)}%`;
  };

  return (
    <div className="table-container">
      <h2 className="section-title">Dados Detalhados das Escolas</h2>
      
      {escolasMetricas.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>NRE</th>
              <th>Escola</th>
              <th>Alunos</th>
              <th>Professores</th>
              <th>Questões Respondidas</th>
              <th>Questões Corretas</th>
              <th>Índice de Respostas</th>
              <th>Percentual de Acertos</th>
            </tr>
          </thead>
          <tbody>
            {escolasMetricas.map((escola, index) => (
              <tr key={index}>
                <td>{escola.NRE}</td>
                <td>{escola.Escola}</td>
                <td>{formatarNumero(escola.Alunos)}</td>
                <td>{formatarNumero(escola.Professores)}</td>
                <td>{formatarNumero(escola['Questões Respondidas'])}</td>
                <td>{formatarNumero(escola['Questões Corretas'])}</td>
                <td>{formatarPercentual(escola['Índice de Respostas'])}</td>
                <td>{formatarPercentual(escola['Percentual de acertos'])}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="no-data-message">
          <p>Nenhum dado disponível para exibição.</p>
          <p>Selecione um NRE ou escola para visualizar os dados detalhados.</p>
        </div>
      )}
    </div>
  );
};

export default DataTable;
