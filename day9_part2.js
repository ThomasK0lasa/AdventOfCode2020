const { count } = require('console');
const fs = require('fs');
const fileName = "day9_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\r\n');

const arrayLength = 25;
let missingNumIndex = arrayLength;
let searching = true;
let sum;

while (searching) {
    let sum = data[missingNumIndex];
    let sumFound = false;
    let correction = missingNumIndex - arrayLength;

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
    missingNumIndex++;
}
missingNumIndex--;

sum = data[missingNumIndex];
searching = true;
let startingIndex = missingNumIndex;
let min, max;

while (searching) {
    startingIndex--;
    let counting = 0;
    min = data[startingIndex];
    max = data[startingIndex];

    for (let i = startingIndex; i > 0; i--) {
        min = min > data[i] ? data[i] : min;
        max = max < data[i] ? data[i] : max;
        counting += parseInt(data[i]);
        if (counting > sum) {
            break;
        } else if (counting == sum) {
            searching = false;
            break;
        }
    }
}

console.log(parseInt(min) + parseInt(max));