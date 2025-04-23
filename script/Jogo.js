let nivelAtual = 1;
let nomeUsuario = "";
let perguntaAtual = 1;
let totalPerguntas = 10;
let respostaCorretaGlobal = 0;
let modoAutomatico = true;

document.getElementById("nivel-select-container").style.display = "none";
document.getElementById("barra").style.display = "none";

// Inicia tela seleção de nivel
function avancarParaSelecaoNivel() {
    const nomeInput = document.getElementById("nome");
    nomeUsuario = nomeInput.value.trim();

    if (nomeUsuario === "") {
        alert("Por favor, digite seu nome para começar.");
        return;
    }

    document.getElementById("tela-nome").style.display = "none";
    document.getElementById("nivel-select-container").style.display = "block";

    const titulo = document.getElementById("titulo");
    titulo.classList.remove("lePeek");
    void titulo.offsetWidth;
    titulo.classList.add("lePeek");
}

// Inicia o quiz
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
    document.getElementById("barra").style.display = "block";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("nivel-atual").textContent = `Nível ${nivelAtual}`;
    gerarPergunta();
}

// Gerador de perguntas
function gerarPergunta() {  

    document.getElementById("mensagem").textContent = "";

    const numero1 = Math.floor(Math.random() * 10) + 1;
    const numero2 = Math.floor(Math.random() * 10) + 1;
    let questao = "";

    if (nivelAtual === 1) {
        questao = `${numero1} + ${numero2}`;
        respostaCorretaGlobal = numero1 + numero2;
    } else if (nivelAtual === 2) {
        totalPerguntas = 15;
        const numero1 = Math.floor(Math.random() * 20) + 1;
        const numero2 = Math.floor(Math.random() * 20) + 1;
        const operacao = Math.random() < 0.5 ? "+" : "-";
    
        let n1 = numero1;
        let n2 = numero2;
    
        if (operacao === "-" && numero1 < numero2) {
            n1 = numero2;
            n2 = numero1;
        }
    
        questao = `${n1} ${operacao} ${n2}`;
        respostaCorretaGlobal = operacao === "+" ? n1 + n2 : n1 - n2;

    } else if (nivelAtual === 3) {
        totalPerguntas = 10;
        questao = `${numero1} x ${numero2}`;
        respostaCorretaGlobal = numero1 * numero2;

    } else if (nivelAtual === 4) {
        totalPerguntas = 15;
        respostaCorretaGlobal = numero1;
        let resultado = numero1 * numero2;
        questao = `${resultado} ÷ ${numero2}`;

    } else if (nivelAtual === 5) {
        totalPerguntas = 20;
        const operacoes = ["+", "-", "x", "÷"];
        const operacao = operacoes[Math.floor(Math.random() * operacoes.length)];
    
        let numero1 = Math.floor(Math.random() * 50) + 1;
        let numero2 = Math.floor(Math.random() * 50) + 1;
    
        if (operacao === "-") {
            if (numero1 < numero2) [numero1, numero2] = [numero2, numero1];
            questao = `${numero1} - ${numero2}`;
            respostaCorretaGlobal = numero1 - numero2;
        } else if (operacao === "+") {
            questao = `${numero1} + ${numero2}`;
            respostaCorretaGlobal = numero1 + numero2;
        } else if (operacao === "x") {
            numero1 = Math.floor(Math.random() * 20) + 1;
            questao = `${numero1} x ${numero2}`;
            respostaCorretaGlobal = numero1 * numero2;
        } else if (operacao === "÷") {
            numero2 = Math.floor(Math.random() * 10) + 1;
            respostaCorretaGlobal = Math.floor(Math.random() * 10) + 1;
            const resultado = respostaCorretaGlobal * numero2;
            questao = `${resultado} ÷ ${numero2}`;
        }
    }
    // Estrutura da pergunta
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

// Verificador das respostas e envias mensagens correspondentes
// Modo automatico tem todos os niveis de perguntas
function verificarResposta() {
    const resposta = parseInt(document.getElementById("resposta").value);
    const mensagem = document.getElementById("mensagem");

    if (resposta === respostaCorretaGlobal) {
        mensagem.textContent = `Muito bem, ${nomeUsuario}! Resposta correta.`;
        perguntaAtual++;

        if (perguntaAtual > totalPerguntas) {
            // Verifica o nivel e apresenta mensagem de todos niveis completos
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
        document.getElementById("quiz").style.display = "hidden";
        mostrarMensagemErro(respostaCorretaGlobal);
    }
}

// barra de progresso das perguntas
function barraProgresso() {
    const progresso = (perguntaAtual / totalPerguntas) * 100;
    document.getElementById("progresso-preenchido").style.width = `${progresso}%`;
    document.getElementById("progresso-texto").textContent = `Pergunta ${perguntaAtual} de ${totalPerguntas}`;
}

function reiniciarJogo() {
    document.getElementById('TelaDeErro').classList.add('hidden');
    document.getElementById('quizContainer').classList.remove('hidden');
    iniciarQuiz();
  }