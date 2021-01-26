let easy = ["baby", "door", "banana"];

function randomWord() {
  return easy[Math.floor(Math.random() * easy.length)];
}

export { randomWord };
