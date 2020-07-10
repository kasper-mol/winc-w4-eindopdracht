// Defining global variables
let triedLetters = [];
let amountOfAttempts = 0;
const inputTextField = document.querySelector("input");
const winner = document.querySelector(".win");
const loser = document.querySelector(".lose");
const confetti = document.querySelector("#confetti-wrap")


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

// Adding eventlisteners to the guess and restart button and running the function to start the game when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document.querySelector(".restart").addEventListener("click", startGame);
  startGame();
});

// Getting individual hangman parts
const hangman = document.querySelector("#hangman")
const head = document.querySelector("#hoofd");
const body = document.querySelector("#lijf");
const arms = document.querySelector("#armen");
const leftLeg = document.querySelector("#linkerbeen");
const rightLeg = document.querySelector("#rechterbeen");


// Function for starting the game on load or when pressing the reset button
function startGame() {
  winner.style.display = "none";
  loser.style.display = "none";
  confetti.style.display = "none";
  inputTextField.value = "";

  amountOfAttempts = 0;
  triedLetters = [];
  updateRemainingAttemptsDom(amountOfAttempts);

  chosenWord = wordpicker(wordList).split("");
  document.querySelector(".lose p span").innerHTML = `"${chosenWord.join("")}"`;

  theWord(chosenWord, triedLetters);
  letters(chosenWord, triedLetters);
}

// Function for choosing a random word out of the wordlist
const wordpicker = function (list) {
  let index = Math.floor(Math.random() * list.length);
  const randomWoord = list[index];
  return randomWoord;
};

// Check if letter is in the word, if not add to wrong guessed letters
const letters = function (word, triedLettersArray) {
  let letterCheck = (letter) => {
    return !word.includes(letter);
  };
  let wrongLetters = triedLettersArray.filter(letterCheck);
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
  return wrongLetters;
};

// Displays the correctly guessed letters
const theWord = function (word, inputLetterWords) {
  let display = word.map(function (letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
  return display;
};

// Checks if a new letter is guessed
const guessLetter = function () {
  const letterTry = inputTextField.value;
  inputTextField.value = "";
  if (triedLetters.includes(letterTry) || letterTry === "") return;
  if (!chosenWord.includes(letterTry)) incrementAttempts();

  triedLetters.push(letterTry);
  theWord(chosenWord, triedLetters);
  letters(chosenWord, triedLetters);
  checkForWinningOrLosing();
};

//Function that checks if the game is won or lost
const checkForWinningOrLosing = function () {
  if (gameWon(chosenWord, triedLetters)) {
    showGifYouWon();
  } else if (gameOver(amountOfAttempts)) {
    showGifYouLost();
  }
};

//Function that increments the amount of attempts
const incrementAttempts = () => {
  amountOfAttempts++;
  drawMan(amountOfAttempts)
  updateRemainingAttemptsDom(amountOfAttempts);
  return amountOfAttempts;
};

// Function for making hangman apear
const drawMan = (amountOfAttempts) => {
  switch (amountOfAttempts) {
    case 1:
      head.style.display = "block";
      break;
    case 2:
      body.style.display = "block";
      break;
    case 3:
      arms.style.display = "block";
      break;
    case 4:
      leftLeg.style.display = "block";
      break;
    case 5:
      rightLeg.style.display = "block";
      break;

  }
}

//Function that updates the remaining attempts on the DOM
const updateRemainingAttemptsDom = function (attempts) {
  document.querySelector(".lives span").innerHTML = 5 - attempts;
};

//Function that returns an array with the remaining right letters and returns true if the length of the array is 0 (all the right letters are guessed)
const gameWon = function (word, triedLettersArray) {
  let remainingRightLetters = word.filter(function (letter) {
    return !triedLettersArray.includes(letter);
  });
  return remainingRightLetters.length === 0 ? true : false;
};

//Function that shows the winning GIF on the DOM
const showGifYouWon = function () {
  document.querySelector(".win").style.display = "block";
  hangman.style.display = "none";
  confetti.style.display = "block";
};

//Function that returns true is there were 5 attempts or more
const gameOver = (attempts) => {
  return attempts >= 5;
};

//Function that shows the losing GIF on the DOM
const showGifYouLost = function () {
  document.querySelector(".lose").style.display = "block";
  hang
};

module.exports = {
  wordpicker,
  wordList,
  theWord,
  letters,
  gameOver,
  incrementAttempts,
  gameWon,
};
