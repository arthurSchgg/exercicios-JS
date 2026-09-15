const prompt = require('prompt-sync')();

let celsius = Number(prompt("Escreva um valor para Celsius C°: "));

const calc = (fahrenheit = celsius * 1.8 + 32);

console.log("A temperatura em fahrenheit é de F°: " + calc);