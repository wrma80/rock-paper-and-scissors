
// Gera a escolha do computador
function getComputerChoice() {
    let randomNumber = parseInt(Math.random() * 3);
    let list = ["rock", "paper", "scissors"];
    computerChoice = list[randomNumber];
};

// Funcao principal para iniciar o jogo
function playRound() {

    getComputerChoice();

    escolha.textContent = `Voce escolheu ${humanChoice} e o computador escolheu ${computerChoice}.`

    if (humanChoice == computerChoice) {
        resultado.textContent = 'Empate!'
    } else if ((humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")) {
        resultado.textContent = "Vitoria!!!"
        humanScore++;
    } else {
        resultado.textContent = "Derrota!"
        computerScore++;
    };

    console.log(`Voce obteve ${humanScore} e o computador obteve ${computerScore}.`)
    if (humanScore == 5) { 
        score.textContent = 'Voce venceu!!! Fim de Jogo.'
    } else if (computerScore == 5) {
        score.textContent = 'O computador venceu! Fim de Jogo.'
    };

};

var humanChoice = "";
var computerChoice = "";
var humanScore = 0;
var computerScore = 0;
var resultado = "";
var escolha = document.querySelector('#escolha');
var resultado = document.querySelector('#resultado');
var score = document.querySelector('#score');

let container = document.querySelector('.container');
container.addEventListener('click', (event) => {
    let target = event.target;
    switch (target.id) {
        case 'rock':
            humanChoice = target.id;
            break;
        case 'paper':
            humanChoice = target.id;
            break;
        case 'scissors':
            humanChoice = target.id;
            break;
    };
    playRound();
});