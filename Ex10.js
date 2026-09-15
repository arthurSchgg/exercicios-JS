const prompt = require('prompt-sync')();

const num1 = Number(prompt("Insira o valor do primeiro número: "));
const num2 = Number(prompt("Insira o valor do segundo número: "));
const escolha = prompt("Escolha qual operação você quer fazer: | + | - | * | / | ");

switch(escolha){
    case '+':
        console.log(num1 + num2);
        break;

    case '-':
        console.log(num1 - num2);
        break;

    case '*':
        console.log(num1 * num2);
        break;
    
    case '/':
        console.log(num1 / num2);
        break;

    default:
        console.log("Opção incorreta!");
}