const prompt = require('prompt-sync')();

const num = Number(prompt("Insira um número: "));

function fatorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * fatorial(num - 1);
  }
}

console.log(fatorial(num));