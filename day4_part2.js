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

const validate = {
    byr: function (input) {
        const regex = /\d{4}/
        if (regex.test(input) && input.length === 4 && input >= 1920 && input <= 2002) {
            return true;
        } else {
            return false;
        }
    },
    iyr: function (input) {
        const regex = /\d{4}/
        if (regex.test(input) && input.length === 4 && input >= 2010 && input <= 2020) {
            return true;
        } else {
            return false;
        }
    },
    eyr: function (input) {
        const regex = /\d{4}/
        if (regex.test(input) && input.length === 4 && input >= 2020 && input <= 2030) {
            return true;
        } else {
            return false;
        }
    },
    hgt: function (input) {
        const regex = /(\d{2,3})(cm|in)/
        const height = input.match(regex);
        let validHeight = false;
        if (height != null) {
            height[1] = parseInt(height[1]);
            if (height[2] === 'cm') {
                if (height[1] >= 150 && height[1] <= 193) {
                    validHeight = true;
                }
            } else if (height[2] === 'in') {
                if (height[1] >= 59 && height[1] <= 76) {
                    validHeight = true;
                }
            }
        }

        if ((input.length === 5 || input.length === 4) && validHeight) {
            return true;
        } else {
            return false;
        }
    },
    hcl: function (input) {
        const regex = /#[0-9|a-f]{6}/
        if (input.length === 7 && regex.test(input)) {
            return true;
        } else {
            return false;
        }
    },
    ecl: function (input) {
        const colors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
        if (colors.indexOf(input) != -1) {
            return true;
        } else {
            return false;
        }
    },
    pid: function (input) {
        const regex = /\d{9}/
        if (input.length === 9 && regex.test(input)) {
            return true;
        } else {
            return false;
        }
    }
}

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
        // basic field check
        if (obj[field] === undefined) {
            valid = false;
        } else {
            // careful check
            const validation = validate[field](obj[field]);
            if (!validation) {
                valid = false;
            }
        }
    })
    return valid;
}
