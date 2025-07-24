alert("Boas vindas ao jogo do número secreto!");

let numeroSecreto = 7;
console.log(numeroSecreto);
let chute = prompt("Escolha um númeo entre 1-10:");

// se o chute fpr igual ao numero secreto 
if (chute == numeroSecreto) {
    alert("Você acertou o numero " + numeroSecreto + ", parabéns!!")
} else {
    alert(`Errooooooooooou! O valor era ${numeroSecreto}`);
}