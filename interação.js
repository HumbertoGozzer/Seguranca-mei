document.addEventListener('DOMContentLoaded', () => {
    
    const botoes = document.querySelectorAll ('.botao-expandir, .gatilho-dica');

    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            
        const idAlvo = this.getAttribute ('aria-controls');
        const alvo = document.getElementById (idAlvo)

        if (alvo) {
            
            const vaiExibir = alvo.hidden;
            
            alvo.hidden = !vaiExibir;
            this.setAttribute('aria-expanded', !alvo.hidden);
        }
    });
  });
});