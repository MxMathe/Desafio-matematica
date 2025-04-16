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
  


function mostrarMensagemErro(respostaCorreta) {
  const container = document.getElementById('conteudo-principal');
  container.innerHTML = ''; // limpa a tela
  
  const erroDiv = document.createElement('div');
  erroDiv.className = 'erro-container';
  
  erroDiv.innerHTML = `
    <h2>Ops! Quase lá 😅</h2>
    <p>A resposta correta era: <strong>${respostaCorreta}</strong></p>
    <p>Não tem problema, você pode tentar novamente!</p>
    <button id="reiniciar-btn">Tentar de Novo</button>
  `;
  
  container.appendChild(erroDiv);
  
  document.getElementById('reiniciar-btn').addEventListener('click', () => {
    location.reload(); // reinicia o quiz
  });
}


function mostrarMensagemCompletou(){
  const container = document.getElementById('conteudo-principal');
  container.innerHTML = ''; // limpa a tela
  
  const erroDiv = document.createElement('div');
  erroDiv.className = 'erro-container';
  
  erroDiv.innerHTML = `
    <h2>Parabéns ${nomeUsuario}! Você completou todos os níveis! 🎉</h2>
    <p>Você pode fazer novamente!</p>
    <button id="reiniciar-btn">Tentar de Novo</button>
  `;
  
  container.appendChild(erroDiv);
  
  document.getElementById('reiniciar-btn').addEventListener('click', () => {
    location.reload(); // reinicia o quiz
  });
}

function mostrarMensagemNivelConcluido() {
  const container = document.getElementById('conteudo-principal');
  container.innerHTML = ''; // limpa a tela
  
  const erroDiv = document.createElement('div');
  erroDiv.className = 'erro-container';
  
  erroDiv.innerHTML = `
    <h2>Parabéns ${nomeUsuario}! Você completou o nível 🎉</h2>
    <p>Você pode fazer novamente e iniciar por um nivel maior!</p>
    <button id="reiniciar-btn">Tentar de Novo</button>
  `;
  
  container.appendChild(erroDiv);
  
  document.getElementById('reiniciar-btn').addEventListener('click', () => {
    location.reload(); // reinicia o quiz
  });
}


