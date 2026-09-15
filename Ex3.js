const prompt = require('prompt-sync')();

let tempo = Number(prompt("Insira o tempo (em horas): "));
let velocidade = Number(prompt("Insira a velocidade média em (km/h): "));

let distancia = velocidade * tempo;

console.log("A distância da viagem foi de: " + distancia + "km")