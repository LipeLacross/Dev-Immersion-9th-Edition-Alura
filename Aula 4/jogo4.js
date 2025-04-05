// Função para iniciar o jogo
function iniciarJogo() {
  let personagem = ["", "", ""];
  let viloes = ["", "", ""];
  let forcaPersonagem = 0;
  let forcaViloes = 0;

  const viloesPossiveis = [
    "Nazaré Tedesco",
    "Odete Roitmann",
    "Flora",
    "Carminha",
    "Laura Prudente da Costa"
  ];

  // Seleção de personagens
  for (let i = 0; i < 3; i++) {
    let nome = prompt(`Digite o nome do personagem ${i + 1}:`);
    personagem[i] = nome || `Personagem ${i + 1}`;
    forcaPersonagem += Math.floor(Math.random() * 10) + 1;
  }

  // Seleção aleatória dos vilões
  for (let i = 0; i < 3; i++) {
    let indice = Math.floor(Math.random() * viloesPossiveis.length);
    viloes[i] = viloesPossiveis[indice];
    forcaViloes += Math.floor(Math.random() * 10) + 1;
  }

  // Exibição no console
  console.log("Time do jogador:", personagem, "Força:", forcaPersonagem);
  console.log("Time dos vilões:", viloes, "Força:", forcaViloes);

  // Verificação de vencedor
  let mensagemFinal = "";
  if (forcaPersonagem > forcaViloes) {
    mensagemFinal = `✅ Seu time venceu pela MAIOR força! 💪\nForça do jogador: ${forcaPersonagem}\nForça dos vilões: ${forcaViloes}`;
  } else if (forcaPersonagem < forcaViloes) {
    mensagemFinal = `❌ O computador venceu o cabo de guerra!\nForça dos vilões: ${forcaViloes}\nForça do jogador: ${forcaPersonagem}`;
  } else {
    mensagemFinal = `🤝 Empate! Ambos os times têm a mesma força: ${forcaPersonagem}`;
  }

  alert(mensagemFinal);

  // Exibindo no HTML (extra)
  document.getElementById("informacoesJogador").textContent = `Seu time: ${personagem.join(", ")} (Força: ${forcaPersonagem})`;
  document.getElementById("informacoesComputador").textContent = `Time dos vilões: ${viloes.join(", ")} (Força: ${forcaViloes})`;
  document.getElementById("resultadoFinal").textContent = mensagemFinal.split("\n")[0];
}

// Ação do botão "Iniciar Jogo"
document.getElementById("iniciarJogoBtn").addEventListener("click", function() {
  // Iniciar o jogo ao clicar no botão
  alert("O jogo está começando!");
  iniciarJogo();  // Chama a função para iniciar o jogo

  // Ocultar o botão de início após o jogo começar
  this.style.display = 'none';
});
