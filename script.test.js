const { wordpicker, wordList, letters, theWord, inputs } = require("./script.js");

test("A word has been chosen", function () {
    expect(wordpicker(wordList)).not.toBeNull();
});

test("does the word contain the letter", function () {
    const expected = ['e', 'o']
    expect(theWord(['t', 'o', 'e', 't', 'e', 'r'], ['e', 'o'])).toEqual(expect.arrayContaining(expected))
})

test("Is the guessed letter added to the list of wrong guessed letters", function () {
    inputs.push('e');
    expect(inputs).toEqual(expect.arrayContaining(['e']))

})