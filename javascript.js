function definirEscolha() {
    return parseInt(Math.random() * 3);
}

function opcaoEscolhida(opcao) {
    var mensagem = "";
    switch (opcao) {
        case 0:
            mensagem = "pedra";
            break;
        case 1:
            mensagem = "papel";
            break;
        case 2:
            mensagem = "tesoura";
            break;
    } 
    return mensagem;
}

var usuario = "Usuario";
var opcaoUsuario = Number(prompt("Digite [0] para pedra, [1] para papel ou [2] para tesoura:"));
var escolhaUsuario = opcaoEscolhida(opcaoUsuario);
var opcaoComputador = definirEscolha();
var escolhaComputador = opcaoEscolhida(opcaoComputador);


if (escolhaUsuario == "pedra" && escolhaComputador == "pedra") {
    console.log(`${usuario} escolheu ${escolhaUsuario}.\nO computador escolheu ${escolhaComputador}.\nDeu empate!!!`);
} else if (escolhaUsuario == "pedra" && escolhaComputador == "tesoura") {
    console.log(`${usuario} escolheu ${escolhaUsuario}.\nO computador escolheu ${escolhaComputador}.\nO ${usuario} ganhou!`);
} else if (escolhaUsuario == "pedra" && escolhaComputador == "papel") {
    console.log(`${usuario} escolheu ${escolhaUsuario}.\nO computador escolheu ${escolhaComputador}.\n O computador ganhou!`);
} else if (escolhaUsuario == "papel" && escolhaComputador == "papel") {
    console.log(`${usuario} escolheu ${escolhaUsuario}.\nO computador escolheu ${escolhaComputador}.\nDeu empate!!!`);
} else if (escolhaUsuario == "papel" && escolhaComputador == "pedra") {
    console.log(`${usuario} escolheu ${escolhaUsuario}.\nO computador escolheu ${escolhaComputador}.\nO ${usuario} ganhou!!!`);
} else if (escolhaUsuario == "papel" && escolhaComputador == "tesoura") {
    console.log(`${usuario} escolheu ${escolhaUsuario}.\nO computador escolheu ${escolhaComputador}.\nO computador ganhou!!!`);
} else if (escolhaUsuario == "tesoura" && escolhaComputador == "tesoura") {
    console.log(`${usuario} escolheu ${escolhaUsuario}.\nO computador escolheu ${escolhaComputador}.\nDeu empate!!!`);
} else if (escolhaUsuario == "tesoura" && escolhaComputador == "pedra") {
    console.log(`${usuario} escolheu ${escolhaUsuario}.\nO computador escolheu ${escolhaComputador}.\nO computador ganhou!!!`);
} else if (escolhaUsuario == "tesoura" && escolhaComputador == "papel") {
    console.log(`${usuario} escolheu ${escolhaUsuario}.\nO computador escolheu ${escolhaComputador}.\nO ${usuario} ganhou!!!`);
}