function jogar() {
  let idade = prompt("Quantos anos você tem?");
  if (idade < 18) {
    alert("Você NÃO pode jogar!!!!");
  } else {
    let escolhaJogador = parseInt(prompt("Escolha 1-Pedra, 2-Papel ou 3-Tesoura"));
    while (![1, 2, 3].includes(escolhaJogador)) {
      escolhaJogador = parseInt(prompt("Escolha inválida! Digite 1-Pedra, 2-Papel ou 3-Tesoura"));
    }

    let escolhaComputador = Math.floor(Math.random() * 3) + 1;
    alert("Escolha do computador foi: " + (escolhaComputador === 1 ? "Pedra" : escolhaComputador === 2 ? "Papel" : "Tesoura"));

    if (escolhaJogador === escolhaComputador) {
      alert("Empate!!!");
    } else if (
        (escolhaJogador === 1 && escolhaComputador === 3) ||
        (escolhaJogador === 2 && escolhaComputador === 1) ||
        (escolhaJogador === 3 && escolhaComputador === 2)
    ) {
      alert("Jogador venceu!!!!");
    } else {
      alert("Computador venceu!!!!");
    }
  }
}
