const prompt = require('prompt-sync')();

const num = Number(prompt("Escolha um número para ver a tabuada: "));

for(let i = 1; i < 11; i++){
    console.log(num + " X " + i + " = " + num * i);
}