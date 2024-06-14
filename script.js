let playerScore = 0;
let computerScore = 0;

function emojiToChoice(unicodeString) {
  console.log(unicodeString);
  switch (unicodeString) {
    case '✊':
      return 'Rock';
    case '✋':
      return 'Paper';
    case '✌':
      return 'Scissors';
  }
}

function choiceToEmoji(choice) {
  switch (choice) {
    case 'Rock':
      return '✊';
    case 'Paper':
      return '✋';
    case 'Scissors':
      return '✌';
  }
}

function getComputerChoice() {
  let possibleChoices = ["Rock", "Paper", "Scissors"];
  let computerChoice = possibleChoices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  let roundWinner;
  const playerChoiceDisplay = document.querySelector('.player-choice-display span');
  const computerChoiceDisplay = document.querySelector('.computer-choice-display span');

  playerChoiceDisplay.textContent = choiceToEmoji(playerChoice);
  computerChoiceDisplay.textContent = choiceToEmoji(computerChoice);

  const messageFirstLine = document.querySelector('.message-box .line-1');
  const messageSecondLine = document.querySelector('.message-box .line-2');

  const messageFirstLineList = ["You won!", "You lost!", "It's a tie!"];
  const messageSecondLineList = ["Rock breaks the Scissor", "Scissor cuts the Paper", "Paper wraps the Rock", `${playerChoice} ties with ${computerChoice}`];

  if (playerChoice === "Rock") {
    if (computerChoice === "Rock") {
      messageSecondLine.textContent = messageSecondLineList[3];
    }
    else if (computerChoice === "Paper") {
      roundWinner = "Computer";
      messageSecondLine.textContent = messageSecondLineList[2];
      computerScore++;
    }
    else {
      roundWinner = "You";
      messageSecondLine.textContent = messageSecondLineList[0];
      playerScore++;
    }
  }
  else if (playerChoice === "Paper") {
    if (computerChoice === "Rock") {
      roundWinner = "You";
      messageSecondLine.textContent = messageSecondLineList[2];
      playerScore++;
    }
    else if (computerChoice === "Paper") {
      messageSecondLine.textContent = messageSecondLineList[3];
    }
    else {
      roundWinner = "Computer";
      messageSecondLine.textContent = messageSecondLineList[1];
      computerScore++;
    }
  }
  else if (playerChoice === "Scissors") {
    if (computerChoice === "Rock") {
      roundWinner = "Computer";
      messageSecondLine.textContent = messageSecondLineList[0];
      computerScore++;
    }
    else if (computerChoice === "Paper") {
      roundWinner = "You";
      messageSecondLine.textContent = messageSecondLineList[1];
      playerScore++;
    }
    else {
      messageSecondLine.textContent = messageSecondLineList[3];
    }
  }

  if (roundWinner === 'You') {
    messageFirstLine.textContent = messageFirstLineList[0];
  }
  else if (roundWinner === 'Computer') {
    messageFirstLine.textContent = messageFirstLineList[1];
  }
  else messageFirstLine.textContent = messageFirstLineList[2];

  // Update the scores
  const playerScoreDisplay = document.querySelector('.player-score-display');
  const computerScoreDisplay = document.querySelector('.computer-score-display');
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;

  if (playerScore === 5) {
    alert('Congratulations! You are the overall winner!');
    location.reload();
  }
  else if (computerScore === 5) {
    alert('Sorry! You lost.');
    location.reload();
  }
}

let choiceButtons = document.querySelectorAll('.choice-buttons button');

choiceButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const playerChoiceEmoji = button.textContent;
    const playerChoice = emojiToChoice(playerChoiceEmoji);
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
  });
})

