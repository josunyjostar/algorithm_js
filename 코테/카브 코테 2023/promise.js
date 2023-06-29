'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString
        .trim()
        .split('\n')
        .map(str => str.trim());

    main();
});

let readLine = () => inputString[currentLine++];

const getArea = (shape, values) => {
    let area = -1;
    switch (shape) {
        case 'square':
            area = Math.pow(values[0], 2);
            break;
        case 'rectangle':
            area = values[0] * values[1];
            break;
        case 'circle':
            area = 3.14 * Math.pow(values[0], 2);
            break;
        case 'triangle':
            area = 0.5 * values[0] * values[1];
            break;
        default:
            break;
    }
    return area;
};
// Complete the calculateArea function below.
// It returns a Promise which on success, returns area of the shape, and on failure returns [-1].
let calculateArea = (shape, values) => {
    const area = getArea(shape, values);
    if (area == -1) {
        throw new Error(-1);
    } else {
        return Math.floor(area * 100) / 100;
    }
};

// Complete the generateArea function below.
// It returns a Promise which on success, returns an array of areas of all the shapes and on failure, returns [-1].
let getAreas = (shapes, values_arr) => {
        try {
        const areas = await Promise.all(shapes.map((shape, index) => calculateArea(shape, values_arr[index])));
        return areas;
    } catch {
        return [-1];
    }
};

let callCalculateArea = async (shapes, values) => (await calculateArea(shapes[0], values[0]).catch(error => error)) instanceof Promise;

let callGetAreas = (shapes, values) => getAreas(shapes, values).catch(error => error);

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let shapes = [];

    for (let shapesItr = 0; shapesItr < n; shapesItr++) {
        const shapesItem = readLine();
        shapes.push(shapesItem);
    }

    let values = [];

    for (let valuesItr = 0; valuesItr < n; valuesItr++) {
        const valuesItem = readLine();
        values.push(JSON.parse('[' + valuesItem + ']'));
    }

    if (callCalculateArea(shapes, values)) {
        callGetAreas(shapes, values).then(res => {
            ws.write(res.join('\n') + '\n');
            ws.end();
        });
    } else {
        console.error('calculateArea does not return a Promise.');
    }
}



// Complete the calculateArea function below.
// It returns a Promise which on success, returns area of the shape, and on failure returns [-1].


// Complete the generateArea function below.
// It returns a Promise which on success, returns an array of areas of all the shapes and on failure, returns [-1].
