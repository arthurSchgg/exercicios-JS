const prompt = require('prompt-sync')();

let num = Number(prompt("Insira um valor: "));
function ehPar (num){
    if(num %2 == 0){
        return true;
    } else {
        return false;
    }
}

console.log(ehPar(num));