const fs = require('fs');
const fileName = "day1_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\n');

const target = 2020;
let sum;
let i, j, k;
i = 0;
while (sum != target) {
    j = i + 1;
    while (sum != target) {
        k = j + 1;
        while (sum != target) {
            sum = parseInt(data[i]) + parseInt(data[j]) + parseInt(data[k]);
            k++
            if (k === data.length) {
                break;
            }
        }
        j++;
        if (j === data.length-1) {
            break;
        }
    }
    i++;
}
console.log('Number 1: ' + data[i-1], 'Number Index: ' + (i-1));
console.log('Number 2: ' + data[j-1], 'Number Index: ' + (j-1));
console.log('Number 3: ' + data[k-1], 'Number Index: ' + (k-1));
console.log('Multiplication: ' + parseInt(data[j-1])*parseInt(data[i-1])*parseInt(data[k-1]));