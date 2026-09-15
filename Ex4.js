const prompt = require('prompt-sync')();

let valor = Number(prompt("Insira o valor (R$): "));

const desconto = valor * 0.15;

const valor_final = valor + desconto;

console.log("O valor " + valor +"R$, com o desconto ficou " + valor_final + "R$");