window.onload = () => {
  function computerPlay(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function capitalise(str) {
    return (
      str.slice(0, 1).toUpperCase() +
      str.slice(0 - (str.length - 1)).toLowerCase()
    ).trim();
  }

  function player(msg, arr) {
    let playerChoice = capitalise(prompt(msg));
    if (arr.includes(playerChoice)) {
      return playerChoice;
    } else {
      return player(
        "Please make a valid choice. Rock, Paper or Scissors:",
        arr
      );
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

  function playRound(playerChoice, computerChoice, winCases) {
    if (playerChoice === computerChoice) {
      return "It's a draw!";
    } else if (winCases[playerChoice] === computerChoice) {
      return `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
      return `Sorry! ${computerChoice} beats ${playerChoice}`;
    }
  }

  function game() {
    const arr = ["Rock", "Paper", "Scissors"];
    const winCases = { Rock: "Scissors", Paper: "Rock", Scissors: "Paper" };
    games = numberofGames();
    for (let i = 0; i < games; i++) {
      let playerChoice = player("Type Rock, Paper or Scissors:", arr);
      let computerChoice = computerPlay(arr);
      console.log(playRound(playerChoice, computerChoice, winCases));
    }
  }

  game();
};
