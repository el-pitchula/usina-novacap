document.addEventListener('DOMContentLoaded', function() {
    const botoesSelecao = document.querySelectorAll('.botao-selecao');
    const cards = document.querySelectorAll('.card');
  
    botoesSelecao.forEach(botao => {
      botao.addEventListener('click', function() {
        const filtro = botao.dataset.filtro;
        
        cards.forEach(card => {
          if (card.classList.contains(filtro) || filtro === 'todos') {
            card.style.display = 'grid';
          } else {
            card.style.display = 'none'; //problema ao clicar nos botões 
          }
        });
  
        botosesSelecao.forEach(botao => {
          botao.classList.remove('ativo');
        });
  
        botao.classList.add('ativo');
      });
    });

    const botaoCriar = document.querySelector('.botao-editar');
      botaoCriar.addEventListener('click', function() {
        // criar card com id e processo ao clicar no botão "Criar +"
        // abrir um modal para criar uma nova solicitação
        console.log('Botão Editar clicado!');
      });
    //const botaoBusca = document.querySelector('.botao-busca');
    //const campoBusca = document.querySelector('input[type="text"]');
  
    botaoBusca.addEventListener('click', function() {
      const termoBusca = campoBusca.value.toLowerCase();
  
      cards.forEach(card => {
        const id = card.querySelector('.id').textContent.toLowerCase();
        const status = card.querySelector('.status').textContent.toLowerCase();
  
        if (id.includes(termoBusca) || status.includes(termoBusca) || termoBusca === '') {
          card.style.display = 'grid';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  