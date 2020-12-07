const fs = require('fs');
const fileName = "day7_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\r\n');

let counter = 0;
const searchBags = new Set();
const doneBags = new Set();
searchBags.add('shiny gold');  // bag initial var

while (searchBags.size > 0) {
    searchBags.forEach(bag => {
        const regex = new RegExp(`^(.+)\\sbags\\scontain.+(${bag})\\sbag`);
        data.forEach(rule => {
            const check = rule.match(regex)
            if (check && !searchBags.has(check[1]) && !doneBags.has(check[1])) {
                searchBags.add(check[1]);
                counter++;
            }
        })
        searchBags.delete(bag);
        doneBags.add(bag);
    });
}

console.log(counter);