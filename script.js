window.onload = () => {
  function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function computerPlay() {
    let arr = ["Rock", "Paper", "Scissors"];
    return randomChoice(arr);
  }

  function player(msg = "Type Rock, Paper or Scissors:") {
    let playerChoice = prompt(msg);
    if (
      playerChoice.toUpperCase().trim() === "ROCK" ||
      playerChoice.toUpperCase().trim() === "PAPER" ||
      playerChoice.toUpperCase().trim() === "SCISSORS"
    ) {
      return playerChoice;
    } else {
      return player("Please make a valid choice. Rock, Paper or Scissors:");
    }
  }

  function numberofGames(msg = "How many games do you want to play?") {
    let games = parseInt(prompt(msg));
    if (isNaN(games)) {
      return numberofGames("Please type a valid number of games.");
    } else {
      return games;
    }
  }

  function playRound(playerChoice, computerChoice) {
    if (playerChoice.toUpperCase().trim() === "ROCK") {
      if (computerChoice === "Rock") {
        return "It's a draw!";
      } else if (computerChoice === "Paper") {
        return "You lose. Paper beats rock!";
      } else {
        return "You win! Rock beats Scissors!";
      }
    } else if (playerChoice.toUpperCase().trim() === "PAPER") {
      if (computerChoice === "Rock") {
        return "You win! Paper beats Rock!";
      } else if (computerChoice === "Paper") {
        return "It's a draw!";
      } else {
        return "You lose. Scissors beats Paper!";
      }
    } else {
      if (computerChoice === "Rock") {
        return "You lose. Rock beats Scissors!";
      } else if (computerChoice === "Paper") {
        return "You win! Scissors beats Paper!";
      } else {
        return "It's a draw!";
      }
    }
  }

  function game() {
    games = numberofGames();

    for (let i = 0; i < games; i++) {
      let playerChoice = player();
      let computerChoice = computerPlay();
      console.log(playRound(playerChoice, computerChoice));
    }
  }

  game();
};
