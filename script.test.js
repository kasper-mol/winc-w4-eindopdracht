const { wordpicker, wordList, letters, theWord } = require("./script.js");

test("A word has been chosen", function () {
    expect(wordpicker(wordList)).not.toBeNull();
});

test("does the word contain the letter", function () {
    const expected = ['e', 'o']
    expect(theWord(['t', 'o', 'e', 't', 'e', 'r'], ['e', 'o'])).toEqual(expect.arrayContaining(expected))
})

