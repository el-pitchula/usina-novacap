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
            card.style.display = 'none';
          }
        });
  
        botoesSelecao.forEach(botao => {
          botao.classList.remove('ativo');
        });
  
        botao.classList.add('ativo');
      });
    });
  
    const botaoBusca = document.querySelector('.botao-busca');
    const campoBusca = document.querySelector('input[type="text"]');
    /*criar para botão de "Criar +"*/
  
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
  