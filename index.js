const fs = require('fs');

function decode(messageFile) {
    // read the content of the file
    const content = fs.readFileSync(messageFile, 'utf-8');

    // split content into lines
    const lines = content.split('\n');

    // create and array and an object to store the words
    const wordsObject = {};
    const wordsArray = [];

    // convert lines into wordObject
    lines.forEach((line) => {
        const lineWords = line.split(' ');
        wordsObject[lineWords[0]] = lineWords[1];
    });

    let wordsObjectLength = Object.keys(wordsObject).length; // object length for for loop
    let row = 1; // end number for each pyramid row

    // push end of line words to an array
    for (let i = 2; row <= wordsObjectLength; i++) {
        wordsArray.push(wordsObject[row]);
        row += i;
    }

    // convert array into a string
    const words = wordsArray.join(' ');
    return words;
}

// run the function
const decodedMessage = decode('coding_qual_input.txt');
console.log(decodedMessage);