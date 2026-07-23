//node rock_paper_scissors.js <rock/paper/scissors>
//use only one argument!

//global function
function cFL(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

// Start of the game
const valid_arg = ["rock", "paper", "scissors"];

const arg = process.argv[2].toLowerCase();

const arg2 = process.argv[3];

if (arg2) {
  console.error("🚨 Use only one argument, more is cheating 🚨");
  process.exit();
}

const com_arg = valid_arg[Math.floor(Math.random(0, 2) * 3)];

const game = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

if (valid_arg.includes(arg)) {
  if (game[arg] === com_arg) {
    console.log(
      `You choose ${cFL(arg)} and the Computer chose ${cFL(com_arg)}. SO YOU WIN 👑`,
    );
  } else if (com_arg === arg) {
    console.log(
      `You choose ${cFL(arg)} and the Computer chose ${cFL(com_arg)}. Logically its a Draw ⚔️`,
    );
  } else {
    console.log(
      `You choose ${cFL(arg)} and the Computer chose ${cFL(com_arg)}. YOU LOOSE ☠️`,
    );
  }
  return;
} else {
  console.error("🚨 You have to choose Rock, Paper or Scissors 🚨");
  return;
}
