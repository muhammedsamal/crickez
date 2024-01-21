export function generateToss() {
  const random = Math.random();
  if (random < 0.5) {
    return "Heads";
  } else {
    return "Tails";
  }
}

export function generateComputerChoice() {
  const random = Math.random();
  if (random < 0.5) {
    return "Batting";
  } else {
    return "Bowling";
  }
}

export function generateComputerScore() {
  return Math.floor(Math.random() * 6) + 1;
}