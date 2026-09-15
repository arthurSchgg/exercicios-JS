const prompt = require('prompt-sync')();

let num = Number(prompt("Escreva um número: "));

console.log("Antecessor: " + --num);
console.log("Sucessor: " + ++num);