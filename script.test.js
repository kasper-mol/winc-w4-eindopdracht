const { wordpicker, wordList, letters, theWord } = require("./script.js")




test("A word has been chosen", function () {
    expect(wordpicker(wordList)).not.toBeNull()
})

test("does the word contain the letter", function () {
    console.log(theWord(['t', 'o', 'e', 't', 'e', 'r'], ['e', 'b', 'r']))
    expect(theWord(['t', 'o', 'e', 't', 'e', 'r'], ['e', 'b', 'r'])).not.toBeNull()
})
