const { wordpicker, wordList } = require("./script.js")




test("A word has been chosen", function () {
    expect(wordpicker(wordList)).not.toBeNull()
}
)