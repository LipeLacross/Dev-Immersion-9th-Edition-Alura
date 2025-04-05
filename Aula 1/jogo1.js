function conversor() {
    let valordolar = prompt("Digite um valor em dólar");
    if (isNaN(valordolar) || valordolar <= 0) {
        alert("Por favor, insira um valor válido!");
        return;
    }
    const taxaConversao = 0.9215;
    alert("O valor em euros é de €: " + (valordolar * taxaConversao).toFixed(2));
}
