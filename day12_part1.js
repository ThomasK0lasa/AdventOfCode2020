const fs = require('fs');
const fileName = "day12_input.txt";
let data = fs.readFileSync(fileName, 'utf8').split('\r\n');

// Action N means to move north by the given value.
// Action E means to move east by the given value.
// Action S means to move south by the given value.
// Action W means to move west by the given value.
// Action L means to turn left the given number of degrees.
// Action R means to turn right the given number of degrees.
// Action F means to move forward by the given value in the direction the ship is currently facing.

const regex = /([A-Z])([0-9]+)/;
const worldDir = [ 'N', 'E', 'S', 'W'];
let currDir = 'E';
let x = 0;
let y = 0;

data.forEach(row => {
    const action = row.match(regex);
    if (action[1] === 'F')
        action[1] = currDir;
    switch (action[1]) {
        case 'N':
            y += parseInt(action[2]);
            break;
        case 'E':
            x += parseInt(action[2]);
            break;
        case 'S':
            y -= parseInt(action[2]);
            break;
        case 'W':
            x -= parseInt(action[2]);
            break;
        case 'R': {
            let rotation = action[2] / 90;
            let currIndx = worldDir.indexOf(currDir);
            let correction = currIndx + rotation;
            if (correction > 3) {
                correction -= 4;
            }
            currDir = worldDir[correction];
            break;
        }
        case 'L': {
            let rotation = action[2] / 90;
            let currIndx = worldDir.indexOf(currDir);
            let correction = currIndx - rotation;
            if (correction < 0) {
                correction += 4;
            }
            currDir = worldDir[correction];
            break;
        }
    }
})

console.log(Math.abs(x) + Math.abs(y));