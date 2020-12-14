const fs = require('fs');
const fileName = "day14_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\r\n');

let mask;
const regMask = /mask = (.+)/;
const numMask = /mem\[(\d+)\] = (\d+)/;
let mem = [];

data.forEach(row => {
    if (row.substring(0, 4) == 'mask') {
        mask = row.match(regMask)[1];
    } else {
        let match = row.match(numMask);
        memLocation = match[1];
        num = match[2];
        maskIt(memLocation, num);
    }
})

let sum = 0;
sumMemory();
console.log(sum);

function maskIt(memLocation, num) {
    num = Number(num).toString(2);
    let numArray = num.split('');
    let leng = mask.length - numArray.length;
    for (let i = 0; i < leng; i++) {
        numArray.unshift('0');
    }
    for (let i = 0; i < mask.length; i++) {
        if (mask[i] === '0') {
            numArray[i] = '0';
        } else if (mask[i] === '1') {
            numArray[i] = '1';
        }
    }
    mem[memLocation] = numArray.join('');
}

function sumMemory() {
    mem.forEach(num => {
        sum += parseInt(num, 2);
    })
}