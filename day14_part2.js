const fs = require('fs');
const fileName = "day14_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\r\n');

let mask;
const regMask = /mask = (.+)/;
const numMask = /mem\[(\d+)\] = (\d+)/;
let mem = [];
let sum = 0;

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

console.log(sum);

function maskIt(memLocation, num) {
    let maskX = mask.split("X").length - 1;
    memLocation = Number(memLocation).toString(2);
    let memLocationArray = memLocation.split('');
    let leng = mask.length - memLocationArray.length;
    
    for (let i = 0; i < leng; i++) {
        memLocationArray.unshift('0');
    }

    for (let m = 0; m < (1 << maskX); m++) {
        let j = 0;
        for (let i = 0; i < mask.length; i++) {
            if (mask[i] === 'X') {
                memLocationArray[i] = m & (1 << j) ? '1' : '0';
                j++;
            } else if (mask[i] === '1') {
                memLocationArray[i] = '1';
            }
        }
        memLocation = parseInt(memLocationArray.join(''), 2);
        if (mem[memLocation]) {
            sum -= mem[memLocation];
            mem[memLocation] = parseInt(num);
            sum += mem[memLocation];
        } else {
            mem[memLocation] = parseInt(num);
            sum += mem[memLocation];
        }
    }
}