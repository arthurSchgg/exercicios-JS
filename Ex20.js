const prompt = require("prompt-sync")();


function caixa() {
    let opcao;
    let saldo = 1000;
    let valor;

    do {

        console.log("== CAIXA ==");
        console.log("1- ver saldo");
        console.log("2- depositar");
        console.log("3- sacar");
        console.log("0- sair");

        opcao = Number(prompt("Escolha uma opção: "));

        switch (opcao) {

            case 1:
                console.log(saldo);
                break;

            case 2:
                valor = Number(prompt("Qual valor deseja depositar? "));
                saldo = saldo + valor;
                console.log(saldo);
                break;

            case 3:
                valor = Number(prompt("Qual valor deseja sacar? "));
                saldo = saldo - valor;
                console.log(saldo);
                break;

            case 0:
                console.log("Saindo");
                break;
        }

    } while (opcao != 0);

}

caixa();