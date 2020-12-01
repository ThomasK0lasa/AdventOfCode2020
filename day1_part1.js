const fs = require('fs');
const fileName = "day1_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\n');

const target = 2020;
let sum;
let i = 0;

while (sum != target) {
    for (j = i + 1; j < data.length; j++) {
        sum = parseInt(data[i]) + parseInt(data[j]);
        if (sum == target) {
            console.log('Number 1: ' + data[i], 'Number Index: ' + i);
            console.log('Number 2: ' + data[j], 'Number Index: ' + j);
            console.log('Multiplication: ' + parseInt(data[j])*parseInt(data[i]));
            break;
        }
    }
    i++;
}
