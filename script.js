const buttons = document.querySelectorAll(".rps");
const arr = ["Rock", "Paper", "Scissors"];
const winCases = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};
const scoreBoard = document.querySelector("#score");
const results = document.createElement("p");
let playerScore = 0;
let computerScore = 0;

function computerPlay(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function capitalise(str) {
  return (
    str.slice(0, 1).toUpperCase() +
    str.slice(0 - (str.length - 1)).toLowerCase()
  ).trim();
}

function player(button) {
  return button.id;
}

function playRound(playerChoice, computerChoice, winCases) {
  if (playerChoice === computerChoice) {
    return "It's a draw!";
  } else if (winCases[playerChoice] === computerChoice) {
    playerScore++;
    return `You win! ${playerChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `Sorry! ${computerChoice} beats ${playerChoice}`;
  }
}

function game(button, arr, winCases) {
  let playerChoice = player(button);
  let computerChoice = computerPlay(arr);
  playRound(playerChoice, computerChoice, winCases);
}

function main() {
  buttons.forEach((button) =>
    button.addEventListener("click", (e) => {
      game(button, arr, winCases);
      console.log(playerScore, computerScore);
      results.textContent = `Player: ${playerScore}
    Computer: ${computerScore}`;
      scoreBoard.appendChild(results);
      if (playerScore === 5) {
        results.textContent = `Player: ${playerScore}
        Computer: ${computerScore}.
        You win!`;
        playerScore = 0;
        computerScore = 0;
      } else if (computerScore === 5) {
        results.textContent = `Player: ${playerScore}
        Computer: ${computerScore}.
        Better luck next time!`;
        playerScore = 0;
        computerScore = 0;
      }
    })
  );
}

main();
