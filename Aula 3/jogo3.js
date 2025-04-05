function jogar() {
  let perdeu = false;
  let tentativas = 0;
  for (let rodada = 1; rodada <= 3; rodada++) {
    let escolhaJogador = prompt("Rodada " + rodada + ", escolha vidro: 1, 2 ou 3 ?");
    let pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if (parseInt(escolhaJogador) === pisoQuebrado) {
      alert("O piso quebrou!!! Acabou o jogo para você.");
      perdeu = true;
      break;
    } else {
      alert("Passou para o próximo nível!! O vidro quebrado estava na posição: " + pisoQuebrado);
    }
  }

  if (!perdeu) {
    alert("Você venceu o jogo!! Parabéns.");
  }
}
