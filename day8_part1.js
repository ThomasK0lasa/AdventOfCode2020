const fs = require('fs');
const fileName = "day8_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\r\n');

let accu = 0
let step = 0

while (data[step]) {
    const split = data[step].split(" ");
    delete data[step];
    const currInst = split[0];
    const currVal = split[1];
    console.log(currInst, currVal)
    switch (currInst) {
        case 'nop':
            step++;
            break;
        case 'acc':
            accu += parseInt(currVal);
            step++;
            break;
        case 'jmp':
            step += parseInt(currVal);
            break;
    }
}

console.log(accu);