let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}

const getAbsoluteDistance = (x, y) => {
  return Math.abs(x - y);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const distanceHuman     = getAbsoluteDistance(humanGuess, targetGuess);
  const distanceComputer  = getAbsoluteDistance(computerGuess, targetGuess);

  if (distanceHuman <= distanceComputer) 
    return true;
  else 
    return false;
}

const updateScore = (winner) => {
  if (winner === "human") humanScore++;
  else computerScore++;
}

const advanceRound = () => {
  currentRoundNumber++;
}