// Aguardar o documento ser totalmente carregado antes de acessar os elementos
document.addEventListener('DOMContentLoaded', function () {
    // Obter o elemento canvas pelo seu ID
    const ctx = document.getElementById('grafico-producao').getContext('2d');
  
    // Dados de exemplo para o gráfico
    const dados = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
      datasets: [{
        label: 'Produção Mensal (MW)',
        data: [400, 450, 500, 480, 520],
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1,
      }]
    };
  
    // Configuração do gráfico
    const config = {
      type: 'bar',
      data: dados,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    };
  
    // Criar o gráfico
    const meuGrafico = new Chart(ctx, config);
  });
  