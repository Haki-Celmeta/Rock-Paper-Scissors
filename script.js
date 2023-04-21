const rock = document.querySelector("#rock");
const papper = document.querySelector("#papper");
const scissors = document.querySelector("#scissors");
let playerPoints = document.querySelector("#player-point");
let computerPoints = document.querySelector("#computer-point");
let won = document.querySelector("#won");
let loose = document.querySelector("#loose");
let wonLooseContainer = document.querySelector(".won-loose-container");
let whoWon = document.querySelector(".who-won");
let repeatButton = document.querySelector("#repeat-button");
let totalPlayerGame = document.querySelector("#total-player-game");
let totalComputerGame = document.querySelector("#total-computer-game");
let playerWins = 0;
let computerWins = 0;
let totalGamePl = 0;
let totalGameCp = 0;
const gameMoves = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return gameMoves[Math.floor(Math.random() * gameMoves.length)];
}

function selection(playerSelection, computerSelection) {
  let ps = playerSelection.toLowerCase();
  if (ps === computerSelection) {
    return 0;
  } else if (ps === "rock" && computerSelection === "paper") {
    return -1;
  } else if (ps === "rock" && computerSelection === "scissors") {
    return 1;
  } else if (ps === "paper" && computerSelection === "rock") {
    return 1;
  } else if (ps === "paper" && computerSelection === "scissors") {
    return -1;
  } else if (ps === "scissors" && computerSelection === "rock") {
    return -1;
  } else if (ps === "scissors" && computerSelection === "paper") {
    return 1;
  } else {
    return 2;
  }
}

let isClicked = true;
let ps = "";
rock.addEventListener("click", function () {
  if (isClicked) {
    ps = "rock";
    playGame();
  }
});
papper.addEventListener("click", function () {
  if (isClicked) {
    ps = "paper";
    playGame();
  }
});
scissors.addEventListener("click", function () {
  if (isClicked) {
    ps = "scissors";
    playGame();
  }
});
repeatButton.addEventListener("click", function () {
  playerWins = 0;
  computerWins = 0;
  isClicked = true;
  playerPoints.innerText = `You: 0 points`;
  computerPoints.innerText = `Computer: 0 points`;
  whoWon.style.visibility = "hidden";
  wonLooseContainer.style.display = "none";
});

function playGame() {
  let decision = selection(ps, getComputerChoice());

  if (decision === 1) {
    playerWins++;
    whoWon.innerText = "You win this round";
    whoWon.style.visibility = "visible";
  } else if (decision === -1) {
    computerWins++;
    whoWon.innerText = "Computer win this round";
    whoWon.style.visibility = "visible";
  } else {
    whoWon.innerText = "Draw";
    whoWon.style.visibility = "visible";
  }
  playerPoints.innerText = `You: ${playerWins} points`;
  computerPoints.innerText = `Computer: ${computerWins} points`;

  if (playerWins === 5) {
    totalGamePl++;
    totalPlayerGame.innerText = `You: ${totalGamePl}`;
    won.innerText = `You Won`;
    loose.innerText = `Computer Loose`;
    wonLooseContainer.style.display = "flex";
    isClicked = false;
  } else if (computerWins === 5) {
    totalGameCp++;
    totalComputerGame.innerText = `Computer: ${totalGameCp}`;
    won.innerText = `Computer Won`;
    loose.innerText = `You Loose`;
    wonLooseContainer.style.display = "flex";
    isClicked = false;
  }
}
