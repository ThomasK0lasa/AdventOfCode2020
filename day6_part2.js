const fs = require('fs');
const fileName = "day6_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\r\n\r\n');

let yesAnswers = 0;

data.forEach(group => {
    const obj = new Object();
    const people = group.split("\r\n");
    people.forEach( letter => {
        for (let i = 0; i < letter.length; i++) {
            if (obj[letter[i]]) {
                obj[letter[i]] += letter[i];
            } else {
                obj[letter[i]] = letter[i];
            }
        }
    })
    for (const value of Object.values(obj)) {
        if (value.length === people.length) {
            yesAnswers ++;
        }
    }
})

console.log(yesAnswers);