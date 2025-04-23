// Animações e transições

// Animação confetes
function soltarConfetes() {
    const count = 200,
      defaults = {
        origin: { y: 0.7 },
      };
  
    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }
  
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
  
    fire(0.2, {
      spread: 60,
    });
  
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
  
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
  
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }
  

// tela de resposta errada
function mostrarMensagemErro(respostaCorreta) {
  const quiz = document.getElementById('quiz');
  const barra = document.getElementById('barra');
  const quizContainer = document.getElementById('quiz-container');

  if (quiz) quiz.style.display = 'none';
  if (barra) barra.style.display = 'none';

  const erroDiv = document.createElement('div');
  erroDiv.id = 'mensagem-erro';
  erroDiv.innerHTML = `
    <h2>Ops! Quase lá 😅</h2>
    <p>A resposta correta era: <strong>${respostaCorreta}</strong></p>
    <p>Não tem problema, você pode tentar novamente!</p>
    <button id="reiniciar-btn">Tentar de Novo</button>
  `;
  quizContainer.appendChild(erroDiv);

  const botao = document.getElementById('reiniciar-btn');
  if (botao) {
    botao.addEventListener('click', () => {
      erroDiv.remove();
      if (quiz) quiz.style.display = 'block';
      if (barra) barra.style.display = 'block';
      gerarPergunta();
    });
  }
}

// Tela nivel completo
function mostrarMensagemCompletou(){
  const container = document.getElementById('conteudo-principal');
  container.innerHTML = '';
  
  const erroDiv = document.createElement('div');
  erroDiv.className = 'mensagem-container';
  
  erroDiv.innerHTML = `
    <h2>Parabéns ${nomeUsuario}! Você completou todos os níveis! 🎉</h2>
    <p>Você pode fazer novamente!</p>
    <button id="reiniciar-btn">Tentar de Novo</button>
  `;
  
  container.appendChild(erroDiv);
  
  document.getElementById('reiniciar-btn').addEventListener('click', () => {
    location.reload();
  });
}
// Tela niveis completos
function mostrarMensagemNivelConcluido() {
  const container = document.getElementById('conteudo-principal');
  container.innerHTML = '';
  
  const erroDiv = document.createElement('div');
  erroDiv.className = 'mensagem-container';
  
  erroDiv.innerHTML = `
    <h2>Parabéns ${nomeUsuario}! Você completou o nível 🎉</h2>
    <p>Você pode fazer novamente e iniciar por um nivel maior!</p>
    <button id="reiniciar-btn">Tentar de Novo</button>
  `;
  
  container.appendChild(erroDiv);
  
  document.getElementById('reiniciar-btn').addEventListener('click', () => {
    location.reload();
  });
}


