const prompt = require('prompt-sync')();

const palavra = prompt("Insira uma palavra para ser invertida: ");

function inverterStrings (palavra){
    return palavra.split('').reverse().join('');
}

console.log(inverterStrings(palavra));