const fs = require('fs');
const fileName = "day4_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\r\n\r\n');

const validFields = [
    'byr', // (Birth Year)
    'iyr', // (Issue Year)
    'eyr', // (Expiration Year)
    'hgt', // (Height)
    'hcl', // (Hair Color)
    'ecl', // (Eye Color)
    'pid' // (Passport ID)
    //cid // (Country ID)
]

let validCount = 0;

data.forEach(passport => {
    const obj = readPassport(passport);
    const valid = validatePassport(obj);
    if (valid) {
        validCount++;
    }
});

console.log(validCount);

function readPassport(passport) {
    const obj = {};
    const regex = /(\w{3}):(#\w*|\w*)/g
    const fieldsArray = passport.match(regex);
    fieldsArray.forEach(field => {
        const pair = field.split(':');
        obj[pair[0]] = pair[1];
    })
    return obj;
}

function validatePassport(obj) {
    let valid = true;
    validFields.forEach(field => {
        if (obj[field] === undefined) {
            valid = false;
        }
    })
    return valid;
}
