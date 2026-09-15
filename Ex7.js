const prompt = require('prompt-sync')();

let salario = Number(prompt("Insira o seu salário: "));

let prestacao = Number(prompt("Insira o valor da prestação: "));

if(prestacao > 0.20 * salario){
    console.log("Empréstimo não pode ser concedido");
} else {
    console.log("Empréstimo pode ser concedido");
}