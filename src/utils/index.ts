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

export function shuffleArray() {
  let array = [1, 2, 3, 4, 5, 6];
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}