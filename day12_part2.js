const fs = require('fs');
const fileName = "day12_input.txt";
let data = fs.readFileSync(fileName, 'utf8').split('\r\n');

// Action N means to move the waypoint north by the given value.
// Action S means to move the waypoint south by the given value.
// Action E means to move the waypoint east by the given value.
// Action W means to move the waypoint west by the given value.
// Action L means to rotate the waypoint around the ship left (counter-clockwise) the given number of degrees.
// Action R means to rotate the waypoint around the ship right (clockwise) the given number of degrees.
// Action F means to move forward to the waypoint a number of times equal to the given value.

const regex = /([A-Z])([0-9]+)/;
let x = 0;
let y = 0;
let wayX = 10;
let wayY = 1;

data.forEach(row => {
    const action = row.match(regex);
    switch (action[1]) {
        case 'F':
            x += wayX * action[2];
            y += wayY * action[2];
            break;
        case 'N':
            wayY += parseInt(action[2]);
            break;
        case 'E':
            wayX += parseInt(action[2]);
            break;
        case 'S':
            wayY -= parseInt(action[2]);
            break;
        case 'W':
            wayX -= parseInt(action[2]);
            break;
        default: // for 'R' and 'L'
            rotate(action[1], action[2])
            break;
    }
})

console.log(Math.abs(x) + Math.abs(y));

function rotate(dir, angle) {
    let rotation = angle / 90;
    if (dir === 'R') {
        for (let i = 0; i < rotation; i++) {
            let temp = wayX;
            wayX = wayY;
            wayY = -temp;
        }
    } else {
        for (let i = 0; i < rotation; i++) {
            let temp = wayY;
            wayY = wayX;
            wayX = -temp;
        }
    }
}