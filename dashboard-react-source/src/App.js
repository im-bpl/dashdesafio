import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Filters from './components/Filters';
import MetricCards from './components/MetricCards';
import PerformanceCharts from './components/PerformanceCharts';
import ComparisonCharts from './components/ComparisonCharts';
import DataTable from './components/DataTable';
import './App.css';
import { dadosIniciais } from './data/dadosIniciais';

function App() {
  const [filtroNRE, setFiltroNRE] = useState(null);
  const [filtroEscola, setFiltroEscola] = useState(null);
  const [dados, setDados] = useState(dadosIniciais);

  const handleFiltroNRE = (nre) => {
    setFiltroNRE(nre);
    setFiltroEscola(null); // Resetar filtro de escola quando mudar NRE
  };

  const handleFiltroEscola = (escola) => {
    setFiltroEscola(escola);
  };

  const handleLimparFiltros = () => {
    setFiltroNRE(null);
    setFiltroEscola(null);
  };

  // Filtrar dados com base nos filtros selecionados
  const dadosFiltrados = React.useMemo(() => {
    let resultado = { ...dados };
    
    if (filtroNRE) {
      // Filtrar métricas de NRE
      resultado.nreMetricas = dados.nreMetricas.filter(nre => nre.NRE === filtroNRE);
      
      // Filtrar escolas por NRE
      resultado.escolasMetricas = dados.escolasMetricas.filter(escola => escola.NRE === filtroNRE);
      
      if (filtroEscola) {
        // Filtrar para uma escola específica
        resultado.escolasMetricas = resultado.escolasMetricas.filter(escola => escola.Escola === filtroEscola);
      }
    }
    
    return resultado;
  }, [dados, filtroNRE, filtroEscola]);

  return (
    <div className="App">
      <Header 
        titulo="Dashboard Desafio PR" 
        semanaAtual={dados.estruturaDados.semanas_atuais}
        ultimaAtualizacao={dados.estruturaDados.ultima_atualizacao}
      />
      
      <Container>
        <Filters 
          nres={dados.listaNREs}
          escolas={filtroNRE ? dados.escolasPorNRE[filtroNRE] : []}
          onNREChange={handleFiltroNRE}
          onEscolaChange={handleFiltroEscola}
          onLimparFiltros={handleLimparFiltros}
          filtroNRE={filtroNRE}
          filtroEscola={filtroEscola}
        />
        
        <MetricCards 
          totalNREs={dados.estruturaDados.total_nres}
          totalEscolas={dados.estruturaDados.total_escolas}
          totalAlunos={dados.estruturaDados.total_alunos}
          totalProfessores={dados.estruturaDados.total_professores}
        />
        
        <PerformanceCharts 
          indiceRespostas={dados.estruturaDados.indice_respostas_geral}
          percentualAcertos={dados.estruturaDados.percentual_acertos_geral}
        />
        
        <ComparisonCharts 
          nreMetricas={dadosFiltrados.nreMetricas}
        />
        
        <DataTable 
          escolasMetricas={dadosFiltrados.escolasMetricas}
        />
      </Container>
    </div>
  );
}

export default App;
