function getComputerChoice() {
    var randomNumber = parseInt(Math.random() * 3);
    var list = ["rock", "paper", "scissors"];
    return list[randomNumber];
}

function getHumanChoice(option) {
    var mensagem = "";
    switch (option) {
        case 0:
            mensagem = "rock";
            break;
        case 1:
            mensagem = "paper";
            break;
        case 2:
            mensagem = "scissors";
            break;
    } 
    return mensagem;
}

var user = "user";
var userOption = Number(prompt("Type [0] for rock, [1] for paper or [2] for scissorr:"));
var userChoice = getHumanChoice(userOption);
var computerChoice = getComputerChoice();


if (userChoice == "rock" && computerChoice == "rock") {
    console.log(`${user} escolheu ${userChoice}.\nO computador escolheu ${computerChoice}.\nDeu empate!!!`);
} else if (userChoice == "rock" && computerChoice == "scissors") {
    console.log(`${user} escolheu ${userChoice}.\nO computador escolheu ${computerChoice}.\nO ${user} ganhou!`);
} else if (userChoice == "rock" && computerChoice == "paper") {
    console.log(`${user} escolheu ${userChoice}.\nO computador escolheu ${computerChoice}.\n O computador ganhou!`);
} else if (userChoice == "paper" && computerChoice == "paper") {
    console.log(`${user} escolheu ${userChoice}.\nO computador escolheu ${computerChoice}.\nDeu empate!!!`);
} else if (userChoice == "paper" && computerChoice == "rock") {
    console.log(`${user} escolheu ${userChoice}.\nO computador escolheu ${computerChoice}.\nO ${user} ganhou!!!`);
} else if (userChoice == "paper" && computerChoice == "scissors") {
    console.log(`${user} escolheu ${userChoice}.\nO computador escolheu ${computerChoice}.\nO computador ganhou!!!`);
} else if (userChoice == "scissors" && computerChoice == "scissors") {
    console.log(`${user} escolheu ${userChoice}.\nO computador escolheu ${computerChoice}.\nDeu empate!!!`);
} else if (userChoice == "scissors" && computerChoice == "rock") {
    console.log(`${user} escolheu ${userChoice}.\nO computador escolheu ${computerChoice}.\nO computador ganhou!!!`);
} else if (userChoice == "scissors" && computerChoice == "paper") {
    console.log(`${user} escolheu ${userChoice}.\nO computador escolheu ${computerChoice}.\nO ${user} ganhou!!!`);
}