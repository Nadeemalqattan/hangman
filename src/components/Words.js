let easy = ["DOG", "BIRD", "CAMEL", "DUCK", "FISH", "COW", "SNAKE", "ZEBRA"];

function randomWord() {
  return easy[Math.floor(Math.random() * easy.length)];
}

export { randomWord };
