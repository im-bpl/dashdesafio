import React from 'react';
import Plot from 'react-plotly.js';
import './ComparisonCharts.css';

const ComparisonCharts = ({ nreMetricas }) => {
  // Função para criar gráfico de barras comparativo entre NREs
  const criarGraficoNRESMelhorado = (dados) => {
    if (!dados || dados.length === 0) {
      return {
        data: [],
        layout: {
          title: 'Sem dados disponíveis',
          height: 400
        }
      };
    }

    // Preparar dados para o gráfico
    const nres = dados.map(item => item.NRE);
    const indicesRespostas = dados.map(item => item['Índice de Respostas'] * 100);
    const percentuaisAcertos = dados.map(item => item['Percentual de acertos'] * 100);

    return {
      data: [
        {
          x: nres,
          y: indicesRespostas,
          type: 'bar',
          name: 'Índice de Respostas (%)',
          marker: {
            color: '#1976d2',
            line: {
              color: '#0d47a1',
              width: 1.5
            }
          },
          hovertemplate: '<b>%{x}</b><br>Índice de Respostas: %{y:.1f}%<extra></extra>'
        },
        {
          x: nres,
          y: percentuaisAcertos,
          type: 'bar',
          name: 'Percentual de Acertos (%)',
          marker: {
            color: '#43a047',
            line: {
              color: '#2e7d32',
              width: 1.5
            }
          },
          hovertemplate: '<b>%{x}</b><br>Percentual de Acertos: %{y:.1f}%<extra></extra>'
        }
      ],
      layout: {
        title: 'Comparativo de Desempenho entre NREs',
        xaxis: {
          title: 'NRE',
          tickangle: -45
        },
        yaxis: {
          title: 'Percentual (%)',
          range: [0, 100]
        },
        barmode: 'group',
        bargap: 0.15,
        bargroupgap: 0.1,
        legend: {
          x: 0.01,
          y: 1.15,
          orientation: 'h'
        },
        margin: {
          l: 50,
          r: 50,
          t: 80,
          b: 100
        },
        height: 500,
        paper_bgcolor: 'white',
        plot_bgcolor: 'white',
        hovermode: 'closest'
      }
    };
  };

  // Função para criar gráfico de alunos por NRE
  const criarGraficoAlunosNREMelhorado = (dados) => {
    if (!dados || dados.length === 0) {
      return {
        data: [],
        layout: {
          title: 'Sem dados disponíveis',
          height: 400
        }
      };
    }

    // Preparar dados para o gráfico
    const nres = dados.map(item => item.NRE);
    const alunos = dados.map(item => item.Alunos);
    const professores = dados.map(item => item.Professores);

    return {
      data: [
        {
          x: nres,
          y: alunos,
          type: 'bar',
          name: 'Alunos',
          marker: {
            color: '#ff7043',
            line: {
              color: '#e64a19',
              width: 1.5
            }
          },
          hovertemplate: '<b>%{x}</b><br>Alunos: %{y:,.0f}<extra></extra>'
        },
        {
          x: nres,
          y: professores,
          type: 'bar',
          name: 'Professores',
          marker: {
            color: '#5c6bc0',
            line: {
              color: '#3949ab',
              width: 1.5
            }
          },
          hovertemplate: '<b>%{x}</b><br>Professores: %{y:,.0f}<extra></extra>'
        }
      ],
      layout: {
        title: 'Distribuição de Alunos e Professores por NRE',
        xaxis: {
          title: 'NRE',
          tickangle: -45
        },
        yaxis: {
          title: 'Quantidade',
          tickformat: ',d'
        },
        barmode: 'group',
        bargap: 0.15,
        bargroupgap: 0.1,
        legend: {
          x: 0.01,
          y: 1.15,
          orientation: 'h'
        },
        margin: {
          l: 60,
          r: 50,
          t: 80,
          b: 100
        },
        height: 500,
        paper_bgcolor: 'white',
        plot_bgcolor: 'white',
        hovermode: 'closest'
      }
    };
  };

  // Criar configurações para os gráficos
  const configGraficoNRES = criarGraficoNRESMelhorado(nreMetricas);
  const configGraficoAlunosNRE = criarGraficoAlunosNREMelhorado(nreMetricas);

  return (
    <div className="comparison-container">
      <h2 className="section-title">Comparativo entre NREs</h2>
      
      <div className="graph-container">
        <Plot
          data={configGraficoNRES.data}
          layout={configGraficoNRES.layout}
          config={{ responsive: true }}
          className="graph"
        />
      </div>
      
      <div className="graph-container">
        <Plot
          data={configGraficoAlunosNRE.data}
          layout={configGraficoAlunosNRE.layout}
          config={{ responsive: true }}
          className="graph"
        />
      </div>
    </div>
  );
};

export default ComparisonCharts;
