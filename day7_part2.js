const fs = require('fs');
const fileName = "day7_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\r\n');
const rulesObj = {}
data.forEach(rule => {
    const ruleSplit = rule.split(' bags contain ');
    rulesObj[ruleSplit[0]] = ruleSplit[1];
})

startingBag = 'shiny gold';
let counter = 0;

counter = countBags(startingBag);

function countBags(bagType) {
    const rules = rulesObj[bagType];
    if (rules === 'no other bags.') {
        return 1;
    } else {
        const rulesArray = rules.split(', ');
        let childRulesSum = 0;
        rulesArray.forEach(rule => {
            rule = rule.match(/^(\d+)\s(.+)\sbag/); // rule[1] - amount // rule[2] - next bagType
            childRulesSum += rule[1] * countBags(rule[2]);
        })
        return 1 + childRulesSum;
    }
}

console.log(counter-1); // -1 as Your bag doesn't count;