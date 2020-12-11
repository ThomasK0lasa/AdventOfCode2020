const fs = require('fs');
const fileName = "day11_input.txt";
let data = fs.readFileSync(fileName, 'utf8').split('\r\n');

data = data.map(row => {
    return row.split("");
})

const oldSeats = [];
const newSeats = [];
let oddEven = 0;

for (let i = 0; i < data.length; i++) {
    newSeats[i] = data[i].slice();
}

do {
    copyData();
    let action = oddEven % 2 == 0 ? "takingSeat" : "leavingSeat";
    shuffle(action);
    oddEven++;
} while (checkChanges())

countOccupied();



function copyData() {
    for (var i = 0; i < newSeats.length; i++) {
        oldSeats[i] = newSeats[i].slice();
    }
}

function shuffle(action) {
    for (let i = 0; i < oldSeats.length; i++) {
        for (let j = 0; j < oldSeats[i].length; j++) {
            if (action == "takingSeat") {
                if (oldSeats[i][j] === "L") {
                    switchSeat(i, j, "L");
                }
            } else {
                if (oldSeats[i][j] === "#") {
                    switchSeat(i, j, "#");
                }
            }
        }
    }
}

function switchSeat(i, j, type) {
    // count occupied seats
    let occupied = 0;
    checkSeat(i - 1, j - 1);
    checkSeat(i - 1, j);
    checkSeat(i - 1, j + 1);
    checkSeat(i, j - 1);
    checkSeat(i, j + 1);
    checkSeat(i + 1, j - 1);
    checkSeat(i + 1, j);
    checkSeat(i + 1, j + 1);

    if (type === "#") {
        if (occupied > 3) {
            newSeats[i][j] = "L";
        }
    } else {
        if (occupied == 0) {
            newSeats[i][j] = "#";
        }
    }

    function checkSeat(i, j) {
        if (oldSeats[i]) {
            if (oldSeats[i][j]) {
                occupied = oldSeats[i][j] === "#" ? occupied + 1 : occupied;
            }
        }
    }
}

function checkChanges() {
    let changed = false;
    for (let i = 0; i < newSeats.length; i++) {
        for (let j = 0; j < newSeats[i].length; j++) {
            if (newSeats[i][j] !== oldSeats[i][j]) {
                changed = true;
            }
        }
    }
    return changed;
}

function countOccupied() {
    let occupied = 0;
    for (let i = 0; i < oldSeats.length; i++) {
        for (let j = 0; j < oldSeats[i].length; j++) {
            occupied = oldSeats[i][j] === "#" ? occupied + 1 : occupied;
        }
    }
    console.log(occupied);
}
