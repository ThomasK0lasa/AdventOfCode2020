const fs = require('fs');
const fileName = "day3_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\n');

const mapWidth = data[0].length-1;
const patterns = [
    [ 1, 1],
    [ 3, 1],
    [ 5, 1],
    [ 7, 1],
    [ 1, 2]
]
let multiply = 1;

for (i=0; i<patterns.length; i++) {
    multiply = multiply * countTrees(patterns[i][0], patterns[i][1])
}

console.log('Multiplication result: ' + multiply);

function countTrees(moveX, moveY) {
    let currX = 0;
    let trees = 0;
    for (currY = moveY; currY < data.length; currY += moveY) {
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
    return trees;
}