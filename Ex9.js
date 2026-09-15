const prompt = require('prompt-sync')();

let nota1 = Number(prompt("Insira a nota 1: "));
let nota2 = Number(prompt("Insira a nota 2: "));
let nota3 = Number(prompt("Insira a nota 3: "));

const media = (nota1 + nota2 + nota3) / 3;

if(media >= 7){
    console.log("Sua média foi de: " + media + ", você foi Aprovado");
} else if(media < 4){
    console.log("Sua média foi de: " + media + ", você foi Reprovado");
} else {
    console.log("Sua média foi de: " + media + ", você está Em Exame");
}