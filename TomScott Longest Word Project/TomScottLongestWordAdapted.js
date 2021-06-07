var fs = require('fs');
var words = fs.readFileSync("words.txt").toString();
words = words.split("\n");

var badLetters = /[gkmqvwxzio]/;
var longestAcceptableWords = [""];

for(var testWord of words) {
    if(testWord.length < longestAcceptableWords[0].length) { continue; }
    if(testWord.match(badLetters)) { continue; }

    if(testWord.length == longestAcceptableWords[0].length){
        longestAcceptableWords.push(testWord);
        continue;
    }

    longestAcceptableWords = [];
    longestAcceptableWords.push(testWord);
    continue;
}

console.log('\n' + longestAcceptableWords.join('\n'));