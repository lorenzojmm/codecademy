console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb" // cheat code to win no matter what
  ) {
    return userInput;
  } else {
    console.log("Not a valid choice, please choose rock, paper, or scissors.");
  }
};

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Tie Game.";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins! (sorry)";
    } else {
      return "You win!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins! (sorry)";
    } else {
      return "You win!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins! (sorry)";
    } else {
      return "You win!";
    }
  }
  if (userChoice === "bomb") {
    return "YOU WIN!";
  }
}

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log(
    `You chose ${userChoice}, and the computer chose ${computerChoice}.`
  );
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
