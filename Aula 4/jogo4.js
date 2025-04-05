let personagem = ["", "", ""];
let viloes = ["", "", ""];
let forcaPersonagem = 0;
let forcaViloes = 0;

alert("O array personagem contém: " + personagem);
for (let i = 0; i < 3; i++) {
  let escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i + 1));
  personagem[i] = escolhaPersonagem;
  forcaPersonagem += Math.floor(Math.random() * 10) + 1;
}
console.log("Agora, o Array Personagem contém: " + personagem);

console.log("Início vilões: " + viloes);
for (let i = 0; i < 3; i++) {
  let indiceAleatorio = Math.floor(Math.random() * 5);
  let viloesPossiveis = ["Nazare Tedesco", "Odete Roitmann", "Flora", "Carminha", "Laura Prudente da Costa"];
  viloes[i] = viloesPossiveis[indiceAleatorio];
  forcaViloes += Math.floor(Math.random() * 10) + 1;
}
console.log("Final vilões: " + viloes);

if (forcaPersonagem > forcaViloes) {
  alert("Seu time venceu pela MAIOR força!! Sua força foi: " + forcaPersonagem);
} else if (forcaPersonagem < forcaViloes) {
  alert("O computador ganhou o cabo de guerra! Com a força de: " + forcaViloes);
} else {
  alert("Os dois times têm a mesma força!! Houve um empate.");
}
