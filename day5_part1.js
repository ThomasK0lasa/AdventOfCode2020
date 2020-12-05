const fs = require('fs');
const fileName = "day5_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\n');

const rowsRange = [0, 127];
const columnsRange = [0, 7];
let maxSeat = 0;

data.forEach(seat => {
    let row = rowsRange.slice();
    for (let i = 0; i < 8; i++) {
        reduceRange(seat[i], row);
    }
    let column = columnsRange.slice();
    for (let i = 7; i < 10; i++) {
        reduceRange(seat[i], column);
    }
    const seatNumber = (row[0] * 8) + column[0];
    maxSeat = maxSeat < seatNumber ? seatNumber : maxSeat;
})

console.log(maxSeat);

function reduceRange(char, range) {
    let seats = range[1] - range[0];
    if (char === 'B' || char === 'R') { // upper half
        range[0] = Math.ceil(seats / 2) + range[0];
    } else if (char === 'F' || char === 'L') { // bottom half
        range[1] = Math.floor(seats / 2) + range[0];
    }
}