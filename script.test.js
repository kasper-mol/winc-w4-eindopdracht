const {
  wordpicker,
  wordList,
  letters,
  theWord,
  gameOver,
  incrementAttempts,
  gameWon,
} = require("./script.js");

describe("Test to check if a word is chosen at the start of  the game", function () {
  test("A word has been chosen", function () {
    expect(wordpicker(wordList)).not.toBeNull();
  });
});

describe("Test to check if a word contains the letter", function () {
  test("does the word contain the letter", function () {
    const expected = ["e", "o"];
    expect(theWord(["t", "o", "e", "t", "e", "r"], ["e", "o"])).toEqual(
      expect.arrayContaining(expected)
    );
  });
});

describe("Test to update the attempts", () => {
  test("If the attempts increment", function () {
    let amountOfAttempts = 0;
    expect(incrementAttempts(amountOfAttempts)).toBe(amountOfAttempts + 1);
  });
});

describe("Test to check if a wrong letter is added to the array with wrong letters", () => {
  test("is the wrongly guessed letter added to wrong letters", function () {
    const expected = ["p"];
    expect(letters(["t", "o", "e", "t", "e", "r"], ["e", "o", "p"])).toEqual(
      expect.arrayContaining(expected)
    );
  });
});

describe("Test function that checks if game is over", () => {
  test("If the game is lost when there are >= 5 attempts", function () {
    amountOfAttempts = 5;
    expect(gameOver(amountOfAttempts)).toBe(true);
  });

  test("If the game is not lost when there are < 5 attempts", function () {
    amountOfAttempts = 3;
    expect(gameOver(amountOfAttempts)).toBe(false);
  });
});

describe("Test function to return an array with the remaining right letters", () => {
  test("If the game is won when all of the right letters are guessed", function () {
    let word = ["t", "o", "e", "t", "e", "r"];
    expect(gameWon(word, ["t", "o", "e", "t", "e", "r"])).toEqual(true);
  });
  test("If the game is not won when not yet all of the right letters are guessed", function () {
    let word = ["t", "o", "e", "t", "e", "r"];
    expect(gameWon(word, ["t", "e"])).toEqual(false);
  });
});
