const fs = require('fs');
const fileName = "day8_input.txt";
const file = fs.readFileSync(fileName, 'utf8').split('\r\n');

let accu;
let step;
const testedInst = [];

function run() {
    const data = file.slice();
    accu = 0;
    step = 0;
    let fixed = false;
    
    while (data[step]) {
        const split = data[step].split(" ");
        delete data[step];
        let currInst = split[0];
        let currVal = split[1];
        if (testedInst.indexOf(step) == -1 && (currInst === "jmp" || currInst === "nop") && !fixed) {
            if (currInst === "jmp") {
                currInst = "nop";
            } else {
                currInst = "jmp";
            }
            testedInst.push(step);
            fixed = true;
        }
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
}

while (step != file.length) {
    run();
}

console.log(accu);