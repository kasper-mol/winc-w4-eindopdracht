const {
  //wordpicker,
  //wordList,
  //letters,
  //theWord,
  gameOver,
  incrementAttempts,
} = require("./script.js");

/* test("A word has been chosen", function () {
  expect(wordpicker(wordList)).not.toBeNull();
});

test("does the word contain the letter", function () {
  console.log(theWord(["t", "o", "e", "t", "e", "r"], ["e", "b", "r"]));
  expect(
    theWord(["t", "o", "e", "t", "e", "r"], ["e", "b", "r"])
  ).not.toBeNull();
}); */
describe("Test to update the attempts", () => {
  test("If the attempts increment", function () {
    let amountOfAttempts = 0;
    expect(incrementAttempts(amountOfAttempts)).toBe(amountOfAttempts + 1);
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
