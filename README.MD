🧠 Desafio de Matemática

Um jogo educativo de matemática desenvolvido com HTML, CSS e
JavaScript, criado para praticar operações matemáticas de forma
simples, interativa e visualmente amigável.

O jogador informa seu nome, escolhe como deseja iniciar o desafio e
responde a uma sequência de perguntas divididas em níveis de
dificuldade. O sistema acompanha o progresso, contabiliza acertos e
erros e apresenta uma tela de resultados ao final.

🎯 Objetivo

O projeto tem como objetivo transformar exercícios de matemática em uma
experiência interativa, permitindo que o usuário:

Informe seu nome antes de começar;

Escolha um nível específico ou inicie desde o primeiro nível;

Resolva perguntas de diferentes operações matemáticas;

Acompanhe seu progresso por meio de uma barra de progresso;

Receba feedback após cada resposta;

Continue o desafio mesmo após errar uma questão;

Visualize seus acertos e erros ao concluir o desafio;

Reinicie o jogo ao final.

🧩 Níveis

O jogo possui atualmente cinco níveis:

Nível                   Conteúdo                Características

1                   Adição                  Números de 1 a 10

2                   Adição e subtração      Números de 1 a 20, sem
resultados negativos

3                   Multiplicação           Números de 1 a 10

4                   Divisão                 Divisões exatas

No modo automático, o jogador pode avançar pelos níveis em sequência.

Também é possível selecionar diretamente um nível específico.

🎮 Funcionamento

O fluxo principal do jogo é:

Tela inicial
    ↓
Informar nome
    ↓
Escolher nível
    ↓
Iniciar desafio
    ↓
Responder perguntas
    ↓
Acompanhar progresso
    ↓
Acertou? ── Sim ──→ Próxima pergunta
    │
    Não
    ↓
Tela de erro
    ↓
Tentar novamente
    ↓
Nova pergunta no mesmo número da sequência
    ↓
Conclusão do nível/desafio
    ↓
Tela de resultados

Quando o usuário erra uma pergunta, o jogo não reinicia todo o desafio.
A tela de erro informa a resposta correta e permite continuar a partir
do mesmo número da pergunta, gerando uma nova questão.

📊 Resultados

Ao final do desafio, o sistema apresenta informações como:

Nome do jogador;

Nível concluído;

Quantidade de acertos;

Quantidade de erros;

Mensagem de conclusão;

Opção para tentar novamente.

Os resultados são contabilizados durante a execução do jogo.

🛠️ Tecnologias utilizadas

HTML5

Responsável pela estrutura das telas, campos, botões, seleção de níveis
e elementos do jogo.

CSS3

Utilizado para:

Estilização da interface;

Layout responsivo;

Animações;

Transições;

Barra de progresso;

Cards e botões;

Tela de resultados.

JavaScript

Responsável pela lógica do jogo, incluindo:

Geração das perguntas;

Cálculo das respostas corretas;

Controle dos níveis;

Controle da pergunta atual;

Validação das respostas;

Contagem de acertos e erros;

Controle da barra de progresso;

Navegação entre as telas.

tsParticles Confetti

Biblioteca utilizada para criar o efeito de confetes ao concluir
níveis/desafios.

📁 Estrutura do projeto

Uma estrutura aproximada do projeto é:

Desafio-de-Matematica/
│
├── index.html
│
├── css/
│   └── Style.css
│
├── script/
│   ├── Jogo.js
│   └── Animacoes.js
│
├── Imagens/
│   └── ...
│
└── README.md

index.html

Contém a estrutura principal da aplicação:

Tela de entrada do nome;

Seleção de nível;

Área do quiz;

Campo de resposta;

Barra de progresso;

Elementos de feedback.

Jogo.js

Concentra a lógica principal do jogo:

Controle dos níveis;

Controle das perguntas;

Geração dos exercícios;

Validação das respostas;

Contagem de resultados;

Progressão do desafio.

Animacoes.js

Concentra funções relacionadas à interface e animações, como:

Confetes;

Telas de erro;

Mensagens de conclusão;

Transições entre estados do jogo.

Style.css

Contém a identidade visual e os estilos da aplicação.

🚀 Como executar

O projeto não exige servidor ou banco de dados para funcionar.

1. Clone o repositório

git clone <https://github.com/MxMathe/Desafio-matematica>

2. Entre na pasta

cd Desafio-de-Matematica

3. Execute

Abra o arquivo:

index.html

em um navegador moderno.

Também é possível utilizar uma extensão como Live Server no Visual
Studio Code para executar o projeto durante o desenvolvimento.

💡 Possíveis melhorias futuras

Algumas funcionalidades que podem ser adicionadas posteriormente:

Sistema de pontuação;

Ranking de jogadores;

Sistema de medalhas;

Cronômetro por pergunta;

Diferentes quantidades de perguntas;

Dificuldade progressiva dentro de cada nível;

Histórico de partidas;

Armazenamento dos resultados com localStorage;

Sons para acertos e erros;

Mais tipos de operações;

Frações e porcentagens;

Modo desafio com tempo limitado;

Tela de estatísticas;

Sistema de recordes;

Melhor acessibilidade;

Persistência dos resultados em banco de dados.

📌 Status

Em desenvolvimento.

O projeto já possui o fluxo principal do jogo implementado, está funcional e está sendo
evoluído gradualmente com novos recursos de interação, feedback e
apresentação dos resultados.