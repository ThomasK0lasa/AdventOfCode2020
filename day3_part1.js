const fs = require('fs');
const fileName = "day3_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\n');

const moveX = 3;
const moveY = 1;
const mapWidth = data[0].length-1;
let currX = 0;
let trees = 0;

for (let currY = moveY; currY < data.length; currY += moveY) {
    // setting X
    currX = currX + moveX;
    if (currX >= mapWidth) {
        currX = currX - mapWidth;
    }
    // checking for Tree #
    if (data[currY][currX] === '#') {
        trees++;
    }
}

console.log('Trees encountered: ' + trees)