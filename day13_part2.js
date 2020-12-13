const fs = require('fs');
const fileName = "day13_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\r\n');

const buses = data[1].split(',');
const search = {};

// building search pattern
let busCounter = 0;
for (let i = 0; i < buses.length; i++) {
    if (buses[i] !== 'x') {
        search[busCounter] = { 'num': buses[i], 'time': i };
        busCounter++;
    }
}
console.log(search);

// searching for matching - very simple brute force
/*let startTime = 100000000000000;
let searching = true;
let division = Math.floor(startTime / search[0]['num']);
let time = division * search[0].num; // first starting time
while (searching) {
    searching = false;
    for (bus in search) {
        if (bus == '0') {
            time += parseInt(search[bus].num);
        } else {
            if ((time + search[bus].time) % search[bus].num != 0 ) {
                searching = true;
                break;
            }
        }
    }
}

console.log(time);*/

let iterator = 1;
let time = 0;
let multiplier = parseInt(search[0].num);
while (iterator < Object.keys(search).length) {
    time += multiplier;

    if ((time + search[iterator].time) % search[iterator].num === 0) {
        console.log(multiplier, search[iterator].num);
        multiplier *= search[iterator].num;
        iterator++;
    }
}

console.log(time);