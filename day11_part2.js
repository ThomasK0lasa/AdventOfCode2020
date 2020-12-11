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
            if (oldSeats[i][j] === ".") {
                newSeats[i][j] = ".";
            }
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
    checkSeat(-1, -1);
    checkSeat(-1, 0);
    checkSeat(-1, 1);
    checkSeat(0, -1);
    checkSeat(0, 1);
    checkSeat(1, -1);
    checkSeat(1, 0);
    checkSeat(1, 1);

    if (type === "#") {
        if (occupied > 4) {
            newSeats[i][j] = "L";
        }
    } else {
        if (occupied == 0) {
            newSeats[i][j] = "#";
        }
    }

    // keep checking seats untill "L", "#" or "undefined"
    function checkSeat(y, x) {
        let searching = true;
        let k = 1;
        do {
            if (oldSeats[k * y + i]) {
                if (oldSeats[k * y + i][k * x + j]) {
                    if (oldSeats[k * y + i][k * x + j] === "#") {
                        occupied++;
                        searching = false;
                    } else if (oldSeats[k * y + i][k * x + j] === "L") {
                        searching = false;
                    }
                } else {
                    searching = false;
                }
            } else {
                searching = false;
            }
            k++;
        } while (searching)
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
