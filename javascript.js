function getComputerChoice() {
    var randomNumber = parseInt(Math.random() * 3);
    var list = ["rock", "paper", "scissors"];
    return list[randomNumber];
}

function getHumanChoice() {
    var userInput = prompt("Type your option [rock], [paper] or [scissors]:");
    userInput = userInput.toLowerCase();
    return userInput;
}

function message(humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}.`)
}


function playGame() {

    var humanScore = 0;
    var computerScore = 0;
    var draw = 0;

    function playRound(humanChoice, computerChoice) {
        
        if (humanChoice == "rock" && computerChoice == "rock") {
            message(humanChoice, computerChoice);
            console.log("It was a draw. Try again!!!");
            draw += 1;
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            message(humanChoice, computerChoice);
            console.log("You lose! Paper beats Rock.");
            computerScore += 1;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            message(humanChoice, computerChoice);
            console.log("You win! Rock beats Scissors.");
            humanScore += 1;
        } else if (humanChoice == "paper" && computerChoice == "paper") {
            message(humanChoice, computerChoice);
            console.log("it was a draw. Try again!!!");
            draw += 1;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            message(humanChoice, computerChoice);
            console.log("You win! Paper beats Rock.");
            humanScore += 1;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            message(humanChoice, computerChoice);
            console.log("You lose! Scissors beats Paper.");
            computerScore += 1;
        } else if (humanChoice == "scissors" && computerChoice == "scissors") {
            message(humanChoice, computerChoice);
            console.log("it was a draw. Try again!!!");
            draw += 1;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            message(humanChoice, computerChoice);
            console.log("You lose! Rock beats Scissors.");
            computerScore += 1
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            message(humanChoice, computerChoice);
            console.log("You win! Scissors beats Paper.");
            humanScore += 1;
        }
    }
    
    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

    }

    if (humanScore == computerScore) {
        console.log("draw!!!");
    } else if (humanScore > computerScore) {
        console.log("You win!!!");
    } else {
        console.log("You lose!")
    }

    console.log(`Result: You won ${humanScore} games and the computer won ${computerScore} games. Had ${draw} draws.`);
}

playGame();



/*
if (humanChoice == "rock") {
    if (computerChoice == "rock") {
        console.log("It was a draw! Try again.");
    } else if (computerChoice == "paper") {
        console.log("You lose! Paper beats Rock."); 
        computerScore += 1;
    } else if (computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore += 1; 
    }
} else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
            console.log("You win! Paper beats Rock.");
            humanChoice += 1;
        } else if (computerChoice == "paper") {
            console.log("It was a draw! Try again."); 
        } else if (computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore += 1; 
        }
} else if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
        console.log("It was a draw! Try again.");
    } else if (computerChoice == "paper") {
        console.log("You lose! Paper beats rock."); 
        computerScore += 1;
    } else if (computerChoice == "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore += 1; 
    }
}
*/