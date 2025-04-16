let nivelAtual = 1;
let nomeUsuario = "";
let perguntaAtual = 1;
let totalPerguntas = 5;
let respostaCorretaGlobal = 0;
let modoAutomatico = true;

document.getElementById("nivel-select-container").style.display = "none";

function avancarParaSelecaoNivel() {
    const nomeInput = document.getElementById("nome");
    nomeUsuario = nomeInput.value.trim();

    if (nomeUsuario === "") {
        alert("Por favor, digite seu nome para começar.");
        return;
    }

    // Esconde tela de nome, mostra tela de nível
    document.getElementById("tela-nome").style.display = "none";
    document.getElementById("nivel-select-container").style.display = "block";

    // Dispara a animação no título
    const titulo = document.getElementById("titulo");
    titulo.classList.remove("lePeek"); // Remove se já tiver (pra resetar)
    void titulo.offsetWidth; // Truque pra forçar reflow
    titulo.classList.add("lePeek"); // Adiciona de novo pra animar
}

function iniciarQuiz() {
    const seletor = document.getElementById("nivel").value;
    document.getElementById("mensagem").textContent = "";
    perguntaAtual = 1;

    if (seletor === "") {
        nivelAtual = 1;
        modoAutomatico = true;
    } else {
        nivelAtual = parseInt(seletor);
        modoAutomatico = false;
    }
    document.getElementById("nivel-select-container").style.display = "none";

    document.getElementById("quiz").style.display = "block";
    document.getElementById("nivel-atual").textContent = `Nível ${nivelAtual}`;
    gerarPergunta();
}

function gerarPergunta() {

    

    document.getElementById("mensagem").textContent = "";

    const numero1 = Math.floor(Math.random() * 10) + 1;
    const numero2 = Math.floor(Math.random() * 10) + 1;
    let questao = "";

    if (nivelAtual === 1) {
        questao = `${numero1} + ${numero2}`;
        respostaCorretaGlobal = numero1 + numero2;
    } else if (nivelAtual === 2) {
        const operacao = Math.random() < 0.5 ? "+" : "-";
        questao = operacao === "+" ? `${numero1} + ${numero2}` : `${numero1} - ${numero2}`;
        respostaCorretaGlobal = operacao === "+" ? numero1 + numero2 : numero1 - numero2;
    } else if (nivelAtual === 3) {
        questao = `${numero1} x ${numero2}`;
        respostaCorretaGlobal = numero1 * numero2;
    } else if (nivelAtual === 4) {
        respostaCorretaGlobal = numero1;
        let resultado = numero1 * numero2;
        questao = `${resultado} ÷ ${numero2}`;
    }

    document.getElementById("pergunta").textContent = `Pergunta ${perguntaAtual}: Quanto é ${questao}?`;
    document.getElementById("resposta").value = "";
    document.getElementById("resposta").focus();

    document.getElementById("resposta").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            verificarResposta();
        }
    });
    
    barraProgresso();
}

function verificarResposta() {
    const resposta = parseInt(document.getElementById("resposta").value);
    const mensagem = document.getElementById("mensagem");

    if (resposta === respostaCorretaGlobal) {
        mensagem.textContent = "Muito bem, ${nomeUsuario}! Resposta correta.";
        perguntaAtual++;

        if (perguntaAtual > totalPerguntas) {
            if (nivelAtual >= 4) {
                mostrarMensagemCompletou();
                soltarConfetes();
                return;
            }

            if (modoAutomatico) {
                nivelAtual++;
                perguntaAtual = 1;
                document.getElementById("nivel-atual").textContent = `Nível ${nivelAtual}`;
                setTimeout(() => gerarPergunta(), 2000);
            } else {
                mostrarMensagemNivelConcluido();
                soltarConfetes();
                return;
            }
        } else {
            setTimeout(() => gerarPergunta(), 2000);
        }
    } else {
        mostrarMensagemErro(respostaCorretaGlobal);
    }
}

function barraProgresso() {
    const progresso = (perguntaAtual / totalPerguntas) * 100;
    document.getElementById("progresso-preenchido").style.width = `${progresso}%`;
    document.getElementById("progresso-texto").textContent = `Pergunta ${perguntaAtual} de ${totalPerguntas}`;
}

function reiniciarJogo() {
    // Oculta tela de erro
    document.getElementById('TelaDeErro').classList.add('hidden');
  
    // Mostra novamente a área do quiz
    document.getElementById('quizContainer').classList.remove('hidden');
  
    // Reinicia o jogo como preferir
    iniciarQuiz(); // ou a função que você criou para começar
  }