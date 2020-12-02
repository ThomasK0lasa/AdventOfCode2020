const fs = require('fs');
const fileName = "day2_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\n');

let valid = 0;

data.forEach(el => {
    const obj = extractData(el);
    const first = obj.target === obj.string[obj.min-1] ? true : false;
    const second = obj.target === obj.string[obj.max-1] ? true : false;
    if ((first && !second) || (!first && second)) {
        valid++;
    }
});

console.log('Valid passwords: ' + valid)

function extractData(el) {
    const regexp = /(\d*)-(\d*)\s(.):\s(\S*)/
    const match = el.match(regexp)
    const obj = {};
    obj.min = match[1];
    obj.max = match[2];
    obj.target = match[3];
    obj.string = match[4];
    return obj;
}