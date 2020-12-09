const fs = require('fs');
const fileName = "day9_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\r\n');

const arrayLength = 25;
let missingNumber = arrayLength;
let searching = true;

while (searching) {
    let sum = data[missingNumber];
    let sumFound = false;
    let correction = missingNumber - arrayLength;

    for (let i = correction; i < correction + arrayLength - 1; i++) {
        for (let j = i + 1; j < correction + arrayLength; j++) {
            if (sum == parseInt(data[i]) + parseInt(data[j])) {
                sumFound = true;
                break;
            }
        }
        if (sumFound) {
            break;
        }
    }
    if (!sumFound) {
        searching = false;
    }
    missingNumber++;
}

console.log(data[missingNumber - 1]);