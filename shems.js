'use strict';

// 2.4.
const range = (start, end) => {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
};
console.log(range(15, 30));

// 2.5
const rangeOdd = (start, end) => {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array.filter((array) => array % 2 != 0);
};
console.log(rangeOdd(15, 30));
