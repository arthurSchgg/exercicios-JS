const prompt = require('prompt-sync')();

const nome = prompt("Qual o seu nome? ");

const ano_nascimento = Number(prompt("Qual seu ano de nascimento (EX: 2000)? "));

const profissao = prompt("Qual sua profissão? ");

const calc_idade = 2026 - ano_nascimento;

const mensagem = `Olá, ${nome}! Seja bem-vindo(a) ao curso de JavaScript. Sua idade é de ${calc_idade} anos, e você tem a profissão ${profissao}!`;

console.log(mensagem);