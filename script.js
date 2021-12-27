window.onload = () => {
  function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function computerPlay() {
    let arr = ["Rock", "Paper", "Scissors"];
    return randomChoice(arr);
  }

  function playRound(playerChoice, computerChoice) {
    if (playerChoice.toUpperCase().trim() === "ROCK") {
      if (computerChoice() === "Rock") {
        return "It's a draw!";
      } else if (computerChoice() === "Paper") {
        return "You lose. Paper beats rock!";
      } else {
        return "You win! Rock beats Scissors!";
      }
    } else if (playerChoice.toUpperCase().trim() === "PAPER") {
      if (computerChoice() === "Rock") {
        return "You win! Paper beats Rock!";
      } else if (computerChoice() === "Paper") {
        return "It's a draw!";
      } else {
        return "You lose. Scissors beats Paper!";
      }
    } else {
      if (computerChoice() === "Rock") {
        return "You lose. Rock beats Scissors!";
      } else if (computerChoice() === "Paper") {
        return "You win! Scissors beats Paper!";
      } else {
        return "It's a draw!";
      }
    }
  }
};
