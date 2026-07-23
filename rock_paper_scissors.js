//cd documents/chapter3/js/cmdline_games
//node rock_paper_scissors.js

// Start of the game
console.info("Choose Rock, Paper or scissors! 😁");

const valid_arg = ["rock", "paper", "scissors"];

const arg = process.argv[2];

console.log("Your Choice:", process.argv[2]);

const game = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

if (valid_arg.includes(arg)) {
  return;
} else {
  console.error("You have to choose from Rock, Paper or Scissors");
  return;
}
