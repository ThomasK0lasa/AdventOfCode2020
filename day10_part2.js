const fs = require('fs');
const fileName = "day10_input.txt";
const data = fs.readFileSync(fileName, 'utf8').split('\r\n');

data.sort((a, b) => {
    return a - b;
});

data.unshift(0);

const series = [];
const seriesLength = [];
let poss = 1;

for (let i = 1; i < data.length - 1; i++) {
    let lastSerie = series[series.length - 1];
    if (data[i] - data[i - 1] === 1 && data[i + 1] - data[i] === 1) {
        if ( lastSerie === undefined) {
            series.push([data[i - 1], data[i + 1]]);
        } else {
            if (data[i - 1] > lastSerie[0] && data[i - 1] < lastSerie[1]) {
                lastSerie[1] = data[i+1]
            } else {
                series.push([data[i - 1], data[i + 1]]);
            }
        }
    }
}

series.forEach(serie => {
    seriesLength.push(serie[1] - serie[0]);
});


seriesLength.forEach( leng => {
    switch (leng) {
        case 2: {
            poss = poss * 2;
            break;
        }
        case 3: {
            poss = poss * 4;
            break;
        }
        case 4: {
            poss = poss * 7;
            break;
        }
    }
})

console.log(poss);