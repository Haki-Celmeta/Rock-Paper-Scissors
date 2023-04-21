const gameMoves = ["rock", "paper", "scissors"];
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
  return gameMoves[Math.floor(Math.random() * gameMoves.length)];
}

function selection(playerSelection, computerSelection) {
  let ps = playerSelection.toLowerCase();
  if (ps === computerSelection) {
    return "draw, play again, adjfaosdijfvjdf;vj";
  } else if (ps === "rock" && computerSelection === "paper") {
    computerWins++;
    return "You lose! Paper beats rock";
  } else if (ps === "rock" && computerSelection === "scissors") {
    playerWins++;
    return "You win! Rock beats scissors";
  } else if (ps === "paper" && computerSelection === "rock") {
    playerWins++;
    return "You win! Paper beats rock";
  } else if (ps === "paper" && computerSelection === "scissors") {
    computerWins++;
    return "You lose! Scissors beats paper";
  } else if (ps === "scissors" && computerSelection === "rock") {
    computerWins++;
    return "You lose! Rock beats scissors";
  } else if (ps === "scissors" && computerSelection === "paper") {
    playerWins++;
    return "You win! Scissors beats paper";
  } else {
    return "Error 101";
  }
}

for (let i = 0; ; i++) {
  if (playerWins === 5) {
    console.log("Player Wins the game ===================");
    break;
  } else if (computerWins === 5) {
    console.log("Computer Wins the game =======================");
    break;
  }

  let playerSelection = String(prompt("Write (Rock, Paper or Scissors): "));
  let computerSelection = getComputerChoice();

  console.log(computerSelection);
  console.log(selection(playerSelection, computerSelection));
}

console.log("Game finished");
