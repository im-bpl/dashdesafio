import React from 'react';
import Plot from 'react-plotly.js';
import './PerformanceCharts.css';

const PerformanceCharts = ({ indiceRespostas, percentualAcertos }) => {
  // Função para criar gráfico gauge melhorado
  const criarGaugeMelhorado = (valor, titulo) => {
    // Determinar a cor principal e ícone baseados no valor
    let corPrincipal, icone, statusTexto;
    
    if (valor < 0.3) {
      corPrincipal = "#d32f2f"; // Vermelho
      icone = "⚠"; // Ícone de alerta
      statusTexto = "Atenção";
    } else if (valor < 0.7) {
      corPrincipal = "#fbc02d"; // Amarelo
      icone = "↗"; // Ícone de progresso
      statusTexto = "Em progresso";
    } else {
      corPrincipal = "#388e3c"; // Verde
      icone = "★"; // Ícone de excelência
      statusTexto = "Excelente";
    }
    
    // Configuração do gráfico gauge
    return {
      data: [
        {
          type: "indicator",
          mode: "gauge+number+delta",
          value: valor * 100,
          title: {
            text: `${titulo} ${icone}<br><span style="font-size:0.8em;color:${corPrincipal}">${statusTexto}</span>`,
            font: { size: 18 }
          },
          gauge: {
            axis: { 
              range: [0, 100], 
              tickwidth: 1, 
              tickcolor: "darkgrey",
              tickvals: [0, 25, 50, 75, 100],
              ticktext: ["0%", "25%", "50%", "75%", "100%"]
            },
            bar: { color: corPrincipal },
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
              { range: [0, 30], color: "rgba(211, 47, 47, 0.3)" },
              { range: [30, 70], color: "rgba(251, 192, 45, 0.3)" },
              { range: [70, 100], color: "rgba(56, 142, 60, 0.3)" }
            ],
            threshold: {
              line: { color: "red", width: 4 },
              thickness: 0.75,
              value: 90
            }
          }
        }
      ],
      layout: {
        width: 300,
        height: 250,
        margin: { t: 40, r: 25, l: 25, b: 25 },
        paper_bgcolor: "white",
        font: { color: "darkblue", family: "Arial" }
      }
    };
  };

  // Criar configurações para os gráficos
  const configGaugeRespostas = criarGaugeMelhorado(indiceRespostas, "Índice de Respostas");
  const configGaugeAcertos = criarGaugeMelhorado(percentualAcertos, "Percentual de Acertos");

  return (
    <div className="performance-container">
      <div className="performance-card">
        <h3 className="card-title">Índice de Respostas</h3>
        <Plot
          data={configGaugeRespostas.data}
          layout={configGaugeRespostas.layout}
          config={{ displayModeBar: false }}
          className="gauge-chart"
        />
      </div>
      
      <div className="performance-card">
        <h3 className="card-title">Percentual de Acertos</h3>
        <Plot
          data={configGaugeAcertos.data}
          layout={configGaugeAcertos.layout}
          config={{ displayModeBar: false }}
          className="gauge-chart"
        />
      </div>
    </div>
  );
};

export default PerformanceCharts;
