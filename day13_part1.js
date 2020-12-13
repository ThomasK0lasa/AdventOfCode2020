const fs = require('fs');
const fileName = "day13_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\r\n');

const regex = /\D+/;
const time = data[0];
const buses = data[1].split(regex);
let busId;
let min = parseInt(time) + 100;

buses.forEach( bus => {
    let division = Math.ceil(time / bus);
    let estim = division * bus;
    if (estim < min) {
        min = estim;
        busId = bus;
    }
});

console.log((min - time) * busId);