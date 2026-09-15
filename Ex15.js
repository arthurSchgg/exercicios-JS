const prompt = require('prompt-sync')();

const numFixo = Math.floor(Math.random() * 100) + 1;

let numUsuario = Number(prompt("Escolha um número aleatório: "));

while(numUsuario != numFixo){
    numUsuario = Number(prompt("Errou! Tente de novo: "));
}

console.log("Parabéns você acertou!");