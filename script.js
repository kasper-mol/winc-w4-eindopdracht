// Space for global variables
// allTheWords = []

// List of possible words
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw",
];
//let maxAmount = 5;

//let word;

// Choosing a rondom word
const wordpicker = function (list) {
  let index = Math.floor(Math.random() * list.length);
  const randomWoord = list[index];
  return randomWoord;
};

let inputs;
const wordGuessed = function (word, inputs) {
  // remove all letters from word that are already guessed
  // We can do this with a for loop to.
  let remaining = word.filter(function (letter) {
    // If the letter is guessed return true (we want to remove that right away)
    return !inputs.includes(letter);
  });
  // If we have letters left, right?
  return remaining.length === 0;
};

/* const clean = function () {
  document.querySelector("input").value = "";
}; */

//let gameOver;
const winTheGame = function () {
  document.querySelector(".win").style.display = "block";
  //gameOver = true;
};

const lose4 = function () {
  // when losing 3 times, this has to happen
  document.querySelector(".lose").style.display = "block";
  //gameOver = true;
};

const spanTheWord1 = function (word) {
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
};

let tries = 0;
const updateTriesDisplay = function (tries) {
  document.querySelector(".lives span").innerHTML = 5 - tries;
};

// Check if letter is in the word, if not add to worng guessed letters
const letters = function (word, inputs) {
  let letterCheck = (letter) => {
    return !word.includes(letter);
  };
  let wrongLetters = inputs.filter(letterCheck);
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

const theWord = function (word, inputLetterWords) {
  let display = word.map(function (letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
};

// Checks if guessed letter is in word
const guessLetter = function () {
  /*   if (gameOver) {
    return;
  } */

  //const input1 = document.querySelector("input").value;
  document.querySelector("input").value = "";
  if (inputs.includes(input1) || input1 === "") {
    return;
  }

  if (!word.includes(input1)) {
    tries++;
    document.querySelector(".lives span").innerHTML = 5 - tries;
  }

  inputs.push(input1);
  theWord(word, inputs);
  letters(word, inputs);

  if (wordGuessed(word, inputs)) {
    winTheGame();
  } else if (tries >= 5) {
    lose4();
  }
};

/* function getThePlayer(player) {
  let play = document.getElementById("player1");
  play = play + "We are about to start the game";
  return play;
} */

// Starting the game, on load
function beginTheGameWithPlayer() {
  //getThePlayer(player1);
  //gameOver = false;

  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";

  tries = 0;
  document.querySelector(".lives span").innerHTML = 5 - 0;

  word = wordpicker(wordList).split("");
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  //word;
  inputs = [];

  theWord(word, inputs);
  letters(word, inputs);
}

// Eventlistners
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document
    .querySelector(".restart")
    .addEventListener("click", beginTheGameWithPlayer);
  beginTheGameWithPlayer();
});

const gameOver = (amountOfAttempts) => {
  return amountOfAttempts >= 5;
};

const incrementAttempts = (amountOfAttempts) => {
  amountOfAttempts++;
  return amountOfAttempts;
};

module.exports = {
  //wordpicker,
  //wordList,
  //theWord,
  //letters,
  gameOver,
  incrementAttempts,
};
