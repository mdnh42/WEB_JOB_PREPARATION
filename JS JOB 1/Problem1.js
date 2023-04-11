// 1. Remove falsy values from array

let miscellaneous = ['', false, NaN, undefined, 0, null, "Hi"];

let fruit = miscellaneous.filter(Boolean);
console.log(fruit);