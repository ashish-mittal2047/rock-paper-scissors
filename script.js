let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let humanChoice = prompt("Please enter your choice among Rock, Paper and Scissors!");
  humanChoiceCapitalized = humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice(1).toLowerCase();
  return humanChoiceCapitalized;
}

function getComputerChoice() {
  let possibleChoices = ["Rock", "Paper", "Scissors"];
  let computerChoice = possibleChoices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function playGame() {
  let numOfRounds = 5;
  for (let i = 0; i < numOfRounds; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  if (humanScore < computerScore) {
    console.log(`Congratulations! You are the overall winner.`);
  }
  else if (humanScore === computerScore) {
    console.log(`Overall, the game has tied!`);
  }
  else console.log(`You lose! Better luck next time.`);
}