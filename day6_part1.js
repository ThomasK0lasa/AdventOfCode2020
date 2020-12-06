const fs = require('fs');
const fileName = "day6_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\r\n\r\n');

let yesAnswers = 0;
let regex = /[a-z|A-Z]/

data.forEach( group => {
    const set = new Set();
    for (let i = 0; i < group.length; i++){
        if (regex.test(group[i])) {
            set.add(group[i]);
        }
    }
    yesAnswers += set.size;
})

console.log(yesAnswers);