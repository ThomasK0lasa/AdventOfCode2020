const fs = require('fs');
const fileName = "day10_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\r\n');

data.sort((a, b) => {
    return a - b;
});

let jolt1 = 1;
let jolt3 = 1;

for (let i = 0; i < data.length-1; i++) {
    let diff = data[i+1] - data[i];
    if ( diff === 1 ) {
        jolt1++;
    } else if (diff === 3) {
        jolt3++;
    }
}

console.log(jolt1 * jolt3);