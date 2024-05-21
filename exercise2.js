let playerScore = 0;
let computerScore = 0;

for (let round = 1; round <=3; round++) {
    let playerSelection = prompt(`Round ${round}: Choose Snake, Water or Gun`);
    playerSelection = playerSelection.toUpperCase();

    let computerOption = ["SNAKE", "WATER", "GUN"];
    let computerSelection = computerOption[Math.floor(Math.random() * 3)];

    document.write(`Round ${round}: <br>`);
    document.write(`You chose ${playerSelection}: <br>`);
    document.write(`Computer Chose ${computerSelection}: <br>`);

    if (playerSelection === computerSelection) {
        document.write("Its a tie! <br><br>");
    } else if (
        (playerSelection === "SNAKE" && computerSelection === "WATER") || 
        (playerSelection === "WATER" && computerSelection === "GUN") ||
        (playerSelection === "GUN" && computerSelection === "SNAKE")
    )  {
        document.write("You Win! <br</br>");
        playerScore++;
    } else {
        document.write("Computer Wins! <br></br>");
        computerScore++;
    }
}

if (playerScore === computerScore) {
    document.write("Tje game ends with a tie!");
} else if{
    playerScore
}