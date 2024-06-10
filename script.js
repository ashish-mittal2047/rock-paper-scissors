let humanScore = 0;
let computerScore = 0;

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