const prompt = require('prompt-sync')();

let numero = Number(prompt("Insira um valor: "));

if(numero > 0){
    console.log("O valor inserido positivo");
} else if(numero < 0){
    console.log("O valor inserido negativo");
} else if(numero == 0){
    console.log("O valor inserido é 0");
}