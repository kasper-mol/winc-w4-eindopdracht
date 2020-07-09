const { wordpicker, wordList, letters } = require("./script.js")




test("A word has been chosen", function () {
    expect(wordpicker(wordList)).not.toBeNull()
})

test("Does the word contain this letter", function () {
    console.log("dit moet true zijn" + letters("toeter", ['e']))
    expect(letters("toeter", [`e`])).toBeTruthy()
})