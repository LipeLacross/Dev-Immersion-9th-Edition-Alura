// PARTE 1: Lista de perguntas e respostas com novas questões
const perguntas = [
  {
    pergunta: "Qual é a matéria escolar que se utiliza contas e números?",
    respostas: [
      { opcao: "Matemática", correto: true },
      { opcao: "Português", correto: false },
      { opcao: "Artes", correto: false }
    ]
  },
  {
    pergunta: "Qual é a matéria escolar que estuda os seres vivos?",
    respostas: [
      { opcao: "Biologia", correto: true },
      { opcao: "Geografia", correto: false },
      { opcao: "História", correto: false }
    ]
  },
  {
    pergunta: "Qual é a matéria que ensina sobre eventos do passado?",
    respostas: [
      { opcao: "História", correto: true },
      { opcao: "Educação Física", correto: false },
      { opcao: "Ciências", correto: false }
    ]
  },
  {
    pergunta: "Qual é a capital do Brasil?",
    respostas: [
      { opcao: "Brasília", correto: true },
      { opcao: "Rio de Janeiro", correto: false },
      { opcao: "São Paulo", correto: false }
    ]
  },
  {
    pergunta: "Qual é o maior planeta do sistema solar?",
    respostas: [
      { opcao: "Júpiter", correto: true },
      { opcao: "Saturno", correto: false },
      { opcao: "Terra", correto: false }
    ]
  },
  {
    pergunta: "Em que ano o homem pisou na Lua pela primeira vez?",
    respostas: [
      { opcao: "1969", correto: true },
      { opcao: "1972", correto: false },
      { opcao: "1959", correto: false }
    ]
  }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0;
let acertos = 0;

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;
  const perguntaAtual = perguntas[indiceAtual];
  perguntaElemento.innerHTML = perguntaAtual.pergunta;
  respostasElemento.innerHTML = "";

  perguntaAtual.respostas.forEach((resposta) => {
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.innerText = resposta.opcao;
    botao.onclick = function () {
      if (resposta.correto) {
        acertos++;
        botao.classList.add("acerto");
      } else {
        botao.classList.add("erro");
      }
      indiceAtual++;
      if (indiceAtual < perguntas.length) {
        carregarPergunta();
      } else {
        finalizarJogo();
      }
    };
    respostasElemento.appendChild(botao);
  });
}


// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";
}

// PARTE 6: Iniciando o jogo
carregarPergunta();
